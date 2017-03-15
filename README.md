# HAR CLI [![version][npm-version]][npm-url] [![License][license-image]][license-url]

> HAR command line tools

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependency Status][dependencyci-image]][dependencyci-url]
[![Dependencies][david-image]][david-url]

## Install

```bash
npm install --only=production --save @har/cli
```

## Usage

###### `har`

```
Commands:
  validate <files..>  validate HAR Schema

Options:
  --help  Show help                                                    [boolean]
```

###### `har validate`

```
har validate <files..>

Options:
  --help        Show help                                              [boolean]
  --schema, -s
       [choices: "cache", "cacheEntry", "content", "cookie", "creator", "entry",
  "har", "header", "log", "page", "pageTimings", "postData", "query", "request",
                                         "response", "timings"] [default: "har"]
```

----
> :copyright: [ahmadnassri.com](https://www.ahmadnassri.com/) &nbsp;&middot;&nbsp;
> License: [ISC][license-url] &nbsp;&middot;&nbsp;
> Github: [@ahmadnassri](https://github.com/ahmadnassri) &nbsp;&middot;&nbsp;
> Twitter: [@ahmadnassri](https://twitter.com/ahmadnassri)

[license-url]: http://choosealicense.com/licenses/isc/
[license-image]: https://img.shields.io/github/license/ahmadnassri/har-cli.svg?style=flat-square

[travis-url]: https://travis-ci.org/ahmadnassri/har-cli
[travis-image]: https://img.shields.io/travis/ahmadnassri/har-cli.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/@har/cli
[npm-version]: https://img.shields.io/npm/v/@har/cli.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/@har/cli.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/ahmadnassri/har-cli
[codeclimate-quality]: https://img.shields.io/codeclimate/github/ahmadnassri/har-cli.svg?style=flat-square
[codeclimate-coverage]: https://img.shields.io/codeclimate/coverage/github/ahmadnassri/har-cli.svg?style=flat-square

[david-url]: https://david-dm.org/ahmadnassri/har-cli
[david-image]: https://img.shields.io/david/ahmadnassri/har-cli.svg?style=flat-square

[dependencyci-url]: https://dependencyci.com/github/ahmadnassri/har-cli
[dependencyci-image]: https://dependencyci.com/github/ahmadnassri/har-cli/badge?style=flat-square
