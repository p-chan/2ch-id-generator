# 2ch-id-generator

> A generator for anonymous user id like as 2ch

## Getting Started

```
$ npm install 2ch-id-generator
```

```
const idGenerator = require('2ch-id-generator')
idGenerator() // -> bVBwT1fBg
```

## API

```
const idGenerator = require('2ch-id-generator')
idGenerator(options)
```

- `options`
  - `ip` - (String) IP address of contributor. Default: `127.0.0.1`
  - `key` - (String) Unique key of bulletin board. Default: `news4vip`
  - `rand` - (String) Random character string updated every day. Default: `fusianasan`
  - `length` - (Number) Length of id. Default: `9`

## License

MIT

## Author

[@p-chan](https://github.com/p-chan)
