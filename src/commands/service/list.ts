import Command from '../../base'
import {flags} from '@oclif/command'
import chalk from 'chalk'
import cli from 'cli-ux'
import * as pd from '../../pd'
import * as utils from '../../utils'
import dotProp from 'dot-prop'

export default class ServiceList extends Command {
  static description = 'List PagerDuty Services'

  static flags = {
    ...Command.flags,
    name: flags.string({
      char: 'n',
      description: 'Retrieve only services whose names contain this text',
    }),
    keys: flags.string({
      char: 'k',
      description: 'Additional fields to display. Specify multiple times for multiple fields.',
      multiple: true,
    }),
    teams: flags.string({
      char: 't',
      description: 'Team names to include. Specify multiple times for multiple teams.',
      multiple: true,
    }),
    json: flags.boolean({
      char: 'j',
      description: 'output full details as JSON',
      exclusive: ['columns', 'filter', 'sort', 'csv', 'extended'],
    }),
    pipe: flags.boolean({
      char: 'p',
      description: 'Print service ID\'s only to stdin, for use with pipes.',
      exclusive: ['columns', 'sort', 'csv', 'extended', 'json'],
    }),
    ...cli.table.flags(),
  }

  async run() {
    const {flags} = this.parse(ServiceList)

    // get a validated token from base class
    const token = this.token as string

    const params: Record<string, any> = {}

    if (flags.name) {
      params.query = flags.name
    }

    if (flags.teams) {
      cli.action.start('Finding teams')
      let teams: any[] = []
      for (const name of flags.teams) {
        // eslint-disable-next-line no-await-in-loop
        const r = await pd.fetch(token, '/teams', {query: name})
        this.dieIfFailed(r)
        teams = [...teams, ...r.getValue().map((e: { id: any }) => e.id)]
      }
      const team_ids = [...new Set(teams)]
      if (team_ids.length === 0) {
        cli.action.stop(chalk.bold.red('none found'))
        this.error('No teams found. Please check your search.', {exit: 1})
      }
      cli.action.stop(`got ${teams.length}: ${chalk.bold.blue(team_ids.join(', '))}`)
      params.team_ids = team_ids
    }

    cli.action.start('Getting services from PD')
    const r = await pd.fetch(token, '/services', params)
    this.dieIfFailed(r)
    const services = r.getValue()
    if (services.length === 0) {
      cli.action.stop(chalk.bold.red('none found'))
      this.exit(0)
    }
    cli.action.stop(`got ${services.length}`)

    if (flags.json) {
      this.log(JSON.stringify(services, null, 2))
      this.exit(0)
    }

    const columns: Record<string, object> = {
      id: {
        header: 'ID',
      },
      status: {
        get: (row: {status: string}) => {
          switch (row.status) {
          case 'active': return chalk.bold.green(row.status)
          case 'disabled':
          case 'maintenance':
            return chalk.dim(row.status)
          case 'warning': return chalk.bold.keyword('orange')(row.status)
          case 'critical': return chalk.bold.red(row.status)
          default: return row.status
          }
        },
      },
      name: {
        header: 'Name',
      },
      ep: {
        header: 'Escalation Policy',
        get: (row: {escalation_policy: {summary: string}}) => row.escalation_policy.summary,
      },
      teams: {
        get: (row: {teams: any[]}) => {
          if (row.teams && row.teams.length > 0) {
            return row.teams.map(e => e.summary).join(', ')
          }
          return '--'
        },
      },
    }

    if (flags.keys) {
      for (const key of flags.keys) {
        columns[key] = {
          header: key,
          get: (row: any) => utils.formatField(dotProp.get(row, key)),
        }
      }
    }

    const options = {
      printLine: this.log,
      ...flags, // parsed flags
    }

    if (flags.pipe) {
      for (const k of Object.keys(columns)) {
        if (k !== 'id') {
          const colAny = columns[k] as any
          colAny.extended = true
        }
      }
      options['no-header'] = true
    }

    cli.table(services, columns, options)
  }
}
