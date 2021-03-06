pagerduty-cli
=============

PagerDuty Command Line Interface

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pagerduty-cli.svg)](https://npmjs.org/package/pagerduty-cli)
[![Downloads/week](https://img.shields.io/npm/dw/pagerduty-cli.svg)](https://npmjs.org/package/pagerduty-cli)
[![License](https://img.shields.io/npm/l/pagerduty-cli.svg)](https://github.com/martindstone/pagerduty-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g pagerduty-cli
$ pd COMMAND
running command...
$ pd (-v|--version|version)
pagerduty-cli/0.0.36 darwin-x64 node-v14.11.0
$ pd --help [COMMAND]
USAGE
  $ pd COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pd auth:get`](#pd-authget)
* [`pd auth:set`](#pd-authset)
* [`pd auth:web`](#pd-authweb)
* [`pd help [COMMAND]`](#pd-help-command)
* [`pd incident:ack`](#pd-incidentack)
* [`pd incident:list`](#pd-incidentlist)
* [`pd incident:notes`](#pd-incidentnotes)
* [`pd incident:open`](#pd-incidentopen)
* [`pd incident:priority`](#pd-incidentpriority)
* [`pd incident:resolve`](#pd-incidentresolve)
* [`pd login`](#pd-login)
* [`pd rest:delete`](#pd-restdelete)
* [`pd rest:fetch`](#pd-restfetch)
* [`pd rest:get`](#pd-restget)
* [`pd rest:post`](#pd-restpost)
* [`pd rest:put`](#pd-restput)
* [`pd schedule:list`](#pd-schedulelist)
* [`pd schedule:open`](#pd-scheduleopen)
* [`pd service:disable`](#pd-servicedisable)
* [`pd service:enable`](#pd-serviceenable)
* [`pd service:list`](#pd-servicelist)
* [`pd service:set`](#pd-serviceset)
* [`pd update [CHANNEL]`](#pd-update-channel)
* [`pd user:list`](#pd-userlist)
* [`pd user:set`](#pd-userset)

## `pd auth:get`

Get PagerDuty Auth token

```
USAGE
  $ pd auth:get

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/auth/get.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/auth/get.ts)_

## `pd auth:set`

Set PagerDuty Auth token

```
USAGE
  $ pd auth:set

OPTIONS
  -t, --token=token  A PagerDuty API token
```

_See code: [src/commands/auth/set.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/auth/set.ts)_

## `pd auth:web`

Authenticate with PagerDuty in the browser

```
USAGE
  $ pd auth:web

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/auth/web.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/auth/web.ts)_

## `pd help [COMMAND]`

display help for pd

```
USAGE
  $ pd help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `pd incident:ack`

Acknowledge PagerDuty Incidents

```
USAGE
  $ pd incident:ack

OPTIONS
  -h, --help     show CLI help
  -i, --ids=ids  Incident ID's to acknowledge. Specify multiple times for multiple incidents.
  -m, --me       Acknowledge all incidents assigned to me
  -p, --pipe     Read incident ID's from stdin.
```

_See code: [src/commands/incident/ack.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/incident/ack.ts)_

## `pd incident:list`

List PagerDuty Incidents

```
USAGE
  $ pd incident:list

OPTIONS
  -S, --services=services                                     Service names to include. Specify multiple times for
                                                              multiple services.

  -e, --assignees=assignees                                   Return only incidents assigned to this PD login email.
                                                              Specify multiple times for multiple assignees.

  -h, --help                                                  show CLI help

  -j, --json                                                  output full details as JSON

  -k, --keys=keys                                             Additional fields to display. Specify multiple times for
                                                              multiple fields.

  -m, --me                                                    Return only incidents assigned to me

  -p, --pipe                                                  Print incident ID's only to stdin, for use with pipes.

  -s, --statuses=open|closed|triggered|acknowledged|resolved  [default: open] Return only incidents with the given
                                                              statuses. Specify multiple times for multiple statuses.

  -t, --teams=teams                                           Team names to include. Specify multiple times for multiple
                                                              teams.

  -u, --urgencies=high|low                                    [default: high,low] Urgencies to include.

  -x, --extended                                              show extra columns

  --columns=columns                                           only show provided columns (comma-separated)

  --csv                                                       output is csv format [alias: --output=csv]

  --filter=filter                                             filter property by partial string matching, ex: name=foo

  --no-header                                                 hide table header from output

  --no-truncate                                               do not truncate output to fit screen

  --output=csv|json|yaml                                      output in a more machine friendly format

  --since=since                                               The start of the date range over which you want to search.

  --sort=sort                                                 property to sort by (prepend '-' for descending)

  --until=until                                               The end of the date range over which you want to search.
```

_See code: [src/commands/incident/list.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/incident/list.ts)_

## `pd incident:notes`

See or add notes on PagerDuty Incidents

```
USAGE
  $ pd incident:notes

OPTIONS
  -h, --help              show CLI help
  -i, --id=id             (required) Incident ID.
  -n, --note=note         Note to add
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [src/commands/incident/notes.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/incident/notes.ts)_

## `pd incident:open`

Open PagerDuty Incidents in your browser

```
USAGE
  $ pd incident:open

OPTIONS
  -h, --help     show CLI help
  -i, --ids=ids  Incident ID's to open. Specify multiple times for multiple incidents.
  -m, --me       Open all incidents assigned to me
  -p, --pipe     Read incident ID's from stdin.
```

_See code: [src/commands/incident/open.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/incident/open.ts)_

## `pd incident:priority`

Set priority on PagerDuty Incidents

```
USAGE
  $ pd incident:priority

OPTIONS
  -h, --help               show CLI help
  -i, --ids=ids            Incident ID's to set priority on. Specify multiple times for multiple incidents.
  -m, --me                 Set priority on all incidents assigned to me
  -n, --priority=priority  (required) The name of the priority to set.
  -p, --pipe               Read incident ID's from stdin.
```

_See code: [src/commands/incident/priority.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/incident/priority.ts)_

## `pd incident:resolve`

Resolve PagerDuty Incidents

```
USAGE
  $ pd incident:resolve

OPTIONS
  -h, --help     show CLI help
  -i, --ids=ids  Incident ID's to resolve. Specify multiple times for multiple incidents.
  -m, --me       Resolve all incidents assigned to me
  -p, --pipe     Read incident ID's from stdin.
```

_See code: [src/commands/incident/resolve.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/incident/resolve.ts)_

## `pd login`

Authenticate with PagerDuty in the browser

```
USAGE
  $ pd login
```

_See code: [src/commands/login.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/login.ts)_

## `pd rest:delete`

Make a DELETE request to PagerDuty

```
USAGE
  $ pd rest:delete

OPTIONS
  -H, --headers=headers    [default: ] Headers to add, for example, `From=martin@pagerduty.com`. Specify multiple times
                           for multiple headers.

  -e, --endpoint=endpoint  (required) The path to the endpoint, for example, `/users/PXXXXXX` or `/services`

  -h, --help               show CLI help

  -p, --params=params      [default: ] Parameters to add, for example, `query=martin` or `include[]=teams. Specify
                           multiple times for multiple params.
```

_See code: [src/commands/rest/delete.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/rest/delete.ts)_

## `pd rest:fetch`

Fetch objects from PagerDuty

```
USAGE
  $ pd rest:fetch

OPTIONS
  -e, --endpoint=endpoint  (required) The path to the endpoint, for example, `/users/PXXXXXX` or `/services`
  -h, --help               show CLI help

  -p, --params=params      [default: ] Parameters to add, for example, `query=martin` or `include[]=teams. Specify
                           multiple times for multiple params.
```

_See code: [src/commands/rest/fetch.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/rest/fetch.ts)_

## `pd rest:get`

Make a GET request to PagerDuty

```
USAGE
  $ pd rest:get

OPTIONS
  -H, --headers=headers    [default: ] Headers to add, for example, `From=martin@pagerduty.com`. Specify multiple times
                           for multiple headers.

  -e, --endpoint=endpoint  (required) The path to the endpoint, for example, `/users/PXXXXXX` or `/services`

  -h, --help               show CLI help

  -p, --params=params      [default: ] Parameters to add, for example, `query=martin` or `include[]=teams. Specify
                           multiple times for multiple params.
```

_See code: [src/commands/rest/get.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/rest/get.ts)_

## `pd rest:post`

Make a POST request to PagerDuty

```
USAGE
  $ pd rest:post

OPTIONS
  -H, --headers=headers    [default: ] Headers to add, for example, `From=martin@pagerduty.com`. Specify multiple times
                           for multiple headers.

  -d, --data=data          (required) JSON data to send

  -e, --endpoint=endpoint  (required) The path to the endpoint, for example, `/users/PXXXXXX` or `/services`

  -h, --help               show CLI help

  -p, --params=params      [default: ] Parameters to add, for example, `query=martin` or `include[]=teams. Specify
                           multiple times for multiple params.
```

_See code: [src/commands/rest/post.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/rest/post.ts)_

## `pd rest:put`

Make a PUT request to PagerDuty

```
USAGE
  $ pd rest:put

OPTIONS
  -H, --headers=headers    [default: ] Headers to add, for example, `From=martin@pagerduty.com`. Specify multiple times
                           for multiple headers.

  -d, --data=data          (required) JSON data to send

  -e, --endpoint=endpoint  (required) The path to the endpoint, for example, `/users/PXXXXXX` or `/services`

  -h, --help               show CLI help

  -p, --params=params      [default: ] Parameters to add, for example, `query=martin` or `include[]=teams. Specify
                           multiple times for multiple params.
```

_See code: [src/commands/rest/put.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/rest/put.ts)_

## `pd schedule:list`

List PagerDuty Schedules

```
USAGE
  $ pd schedule:list

OPTIONS
  -h, --help              show CLI help
  -j, --json              output full details as JSON
  -k, --keys=keys         Additional fields to display. Specify multiple times for multiple fields.
  -n, --name=name         Select schedules whose names contain the given text
  -p, --pipe              Print user ID's only to stdin, for use with pipes.
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [src/commands/schedule/list.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/schedule/list.ts)_

## `pd schedule:open`

Open PagerDuty Schedules in the browser

```
USAGE
  $ pd schedule:open

OPTIONS
  -h, --help       show CLI help
  -i, --ids=ids    The IDs of schedules to open.
  -n, --name=name  Open schedules matching this string.
  -p, --pipe       Read schedule ID's from stdin.
```

_See code: [src/commands/schedule/open.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/schedule/open.ts)_

## `pd service:disable`

Disable PagerDuty Services

```
USAGE
  $ pd service:disable

OPTIONS
  -h, --help       show CLI help
  -i, --ids=ids    Select services with the given ID. Specify multiple times for multiple services.
  -n, --name=name  Select services whose names contain the given text
  -p, --pipe       Read service ID's from stdin.
```

_See code: [src/commands/service/disable.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/service/disable.ts)_

## `pd service:enable`

Enable PagerDuty Services

```
USAGE
  $ pd service:enable

OPTIONS
  -h, --help       show CLI help
  -i, --ids=ids    Select services with the given ID. Specify multiple times for multiple services.
  -n, --name=name  Select services whose names contain the given text
  -p, --pipe       Read service ID's from stdin.
```

_See code: [src/commands/service/enable.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/service/enable.ts)_

## `pd service:list`

List PagerDuty Services

```
USAGE
  $ pd service:list

OPTIONS
  -h, --help              show CLI help
  -j, --json              output full details as JSON
  -k, --keys=keys         Additional fields to display. Specify multiple times for multiple fields.
  -n, --name=name         Retrieve only services whose names contain this text
  -p, --pipe              Print service ID's only to stdin, for use with pipes.
  -t, --teams=teams       Team names to include. Specify multiple times for multiple teams.
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [src/commands/service/list.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/service/list.ts)_

## `pd service:set`

Set PagerDuty Service attributes

```
USAGE
  $ pd service:set

OPTIONS
  -h, --help         show CLI help
  -i, --ids=ids      Select services with the given ID. Specify multiple times for multiple services.
  -k, --key=key      (required) Attribute key to set
  -n, --name=name    Select services whose names contain the given text
  -p, --pipe         Read service ID's from stdin.
  -v, --value=value  (required) Attribute value to set
```

_See code: [src/commands/service/set.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/service/set.ts)_

## `pd update [CHANNEL]`

update the pd CLI

```
USAGE
  $ pd update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.10/src/commands/update.ts)_

## `pd user:list`

List PagerDuty Users

```
USAGE
  $ pd user:list

OPTIONS
  -e, --email=email       Select users whose login email addresses contain the given text
  -h, --help              show CLI help
  -j, --json              output full details as JSON
  -k, --keys=keys         Additional fields to display. Specify multiple times for multiple fields.
  -p, --pipe              Print user ID's only to stdin, for use with pipes.
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [src/commands/user/list.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/user/list.ts)_

## `pd user:set`

Set PagerDuty User attributes

```
USAGE
  $ pd user:set

OPTIONS
  -e, --email=email  Select users whose emails contain the given text
  -h, --help         show CLI help
  -i, --ids=ids      Select users with the given ID. Specify multiple times for multiple users.
  -k, --key=key      (required) Attribute key to set
  -p, --pipe         Read user ID's from stdin.
  -v, --value=value  (required) Attribute value to set
```

_See code: [src/commands/user/set.ts](https://github.com/martindstone/pagerduty-cli/blob/v0.0.36/src/commands/user/set.ts)_
<!-- commandsstop -->
