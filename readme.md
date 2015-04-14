```
$ cat package.json

{
  "name": "hello-world",
  "dependencies": {
    "file-loader": "^0.8.1",
    "style-loader": "git+https://github.com/zxcabs/style-loader.git#v0.10.1-tf0",
    "webpack": "1.8"
  },
  "engine": "0.12"
}

```


```
$ make compile

npm install
rm -rf ./revision_one/compile/*.* ./revision_two/compile/*.*
cd ./revision_one && ../node_modules/.bin/webpack --config ./webpack.config.js
Hash: 428ac18128362f0c2eb7
Version: webpack 1.8.4
Time: 118ms
                               Asset      Size  Chunks             Chunk Names
320fa55e0efc5c0191295f703abebc30.css  27 bytes          [emitted]  
        main_fababdda41919d48ae2c.js   4.08 kB       0  [emitted]  main
                            main.map   4.26 kB       0  [emitted]  main
   [0] ./src/main.js 134 bytes {0} [built]
   [1] ./src/vendor/fake.jquery.js 85 bytes {0} [built]
    + 3 hidden modules
cd ./revision_two && ../node_modules/.bin/webpack --config ./webpack.config.js
Hash: 428ac18128362f0c2eb7
Version: webpack 1.8.4
Time: 114ms
                               Asset      Size  Chunks             Chunk Names
320fa55e0efc5c0191295f703abebc30.css  27 bytes          [emitted]  
        main_fababdda41919d48ae2c.js   4.08 kB       0  [emitted]  main
                            main.map   4.26 kB       0  [emitted]  main
   [0] ./src/main.js 134 bytes {0} [built]
   [1] ./src/vendor/fake.jquery.js 85 bytes {0} [built]
    + 3 hidden modules

```


```
$ make diff

diff revision_one/compile/main_*.js revision_two/compile/main_*.js	

```


```
$ npm ls

hello-world@ /home/user/projects/webpack_hash
├─┬ file-loader@0.8.1
│ └─┬ loader-utils@0.2.7
│   ├── big.js@2.5.1
│   └── json5@0.1.0
├─┬ style-loader@0.10.1
│ └─┬ loader-utils@0.2.7
│   ├── big.js@2.5.1
│   └── json5@0.1.0
└─┬ webpack@1.8.4
  ├── async@0.9.0
  ├── clone@0.1.19
  ├─┬ enhanced-resolve@0.8.5
  │ └── graceful-fs@3.0.6
  ├── esprima@1.2.5
  ├── interpret@0.5.2
  ├── memory-fs@0.2.0
  ├─┬ mkdirp@0.5.0
  │ └── minimist@0.0.8
  ├─┬ node-libs-browser@0.4.3
  │ ├── assert@1.3.0
  │ ├─┬ browserify-zlib@0.1.4
  │ │ └── pako@0.2.6
  │ ├─┬ buffer@3.1.2
  │ │ ├── base64-js@0.0.8
  │ │ ├── ieee754@1.1.4
  │ │ └── is-array@1.0.1
  │ ├─┬ console-browserify@1.1.0
  │ │ └── date-now@0.1.4
  │ ├── constants-browserify@0.0.1
  │ ├─┬ crypto-browserify@3.2.8
  │ │ ├── pbkdf2-compat@2.0.1
  │ │ ├── ripemd160@0.2.0
  │ │ └── sha.js@2.2.6
  │ ├── domain-browser@1.1.4
  │ ├── events@1.0.2
  │ ├─┬ http-browserify@1.7.0
  │ │ ├── Base64@0.2.1
  │ │ └── inherits@2.0.1
  │ ├── https-browserify@0.0.0
  │ ├── os-browserify@0.1.2
  │ ├── path-browserify@0.0.0
  │ ├── process@0.10.1
  │ ├── punycode@1.3.2
  │ ├── querystring-es3@0.2.1
  │ ├─┬ readable-stream@1.1.13
  │ │ ├── core-util-is@1.0.1
  │ │ ├── inherits@2.0.1
  │ │ └── isarray@0.0.1
  │ ├─┬ stream-browserify@1.0.0
  │ │ └── inherits@2.0.1
  │ ├── string_decoder@0.10.31
  │ ├── timers-browserify@1.4.0
  │ ├── tty-browserify@0.0.0
  │ ├─┬ url@0.10.3
  │ │ └── querystring@0.2.0
  │ ├─┬ util@0.10.3
  │ │ └── inherits@2.0.1
  │ └─┬ vm-browserify@0.0.4
  │   └── indexof@0.0.1
  ├─┬ optimist@0.6.1
  │ ├── minimist@0.0.10
  │ └── wordwrap@0.0.2
  ├── supports-color@1.3.1
  ├── tapable@0.1.9
  ├─┬ uglify-js@2.4.20
  │ ├── async@0.2.10
  │ ├─┬ source-map@0.1.34
  │ │ └── amdefine@0.1.0
  │ ├── uglify-to-browserify@1.0.2
  │ └─┬ yargs@3.5.4
  │   ├── camelcase@1.0.2
  │   ├── decamelize@1.0.0
  │   ├── window-size@0.1.0
  │   └── wordwrap@0.0.2
  ├─┬ watchpack@0.2.4
  │ ├─┬ chokidar@1.0.1
  │ │ ├─┬ anymatch@1.2.1
  │ │ │ └─┬ micromatch@2.1.5
  │ │ │   ├─┬ arr-diff@1.0.1
  │ │ │   │ └── array-slice@0.2.3
  │ │ │   ├─┬ braces@1.8.0
  │ │ │   │ ├─┬ expand-range@1.8.1
  │ │ │   │ │ └─┬ fill-range@2.2.2
  │ │ │   │ │   ├── is-number@1.1.2
  │ │ │   │ │   ├── isobject@1.0.0
  │ │ │   │ │   ├── randomatic@1.1.0
  │ │ │   │ │   └── repeat-string@1.5.2
  │ │ │   │ ├── preserve@0.2.0
  │ │ │   │ └── repeat-element@1.1.0
  │ │ │   ├─┬ debug@2.1.3
  │ │ │   │ └── ms@0.7.0
  │ │ │   ├── expand-brackets@0.1.1
  │ │ │   ├── filename-regex@2.0.0
  │ │ │   ├── kind-of@1.1.0
  │ │ │   ├─┬ object.omit@0.2.1
  │ │ │   │ ├─┬ for-own@0.1.3
  │ │ │   │ │ └── for-in@0.1.4
  │ │ │   │ └── isobject@0.2.0
  │ │ │   ├─┬ parse-glob@3.0.0
  │ │ │   │ ├── glob-base@0.2.0
  │ │ │   │ ├── is-dotfile@1.0.0
  │ │ │   │ └── is-extglob@1.0.0
  │ │ │   └─┬ regex-cache@0.3.0
  │ │ │     ├─┬ benchmarked@0.1.4
  │ │ │     │ ├── ansi@0.3.0
  │ │ │     │ ├── benchmark@1.0.0
  │ │ │     │ ├─┬ chalk@1.0.0
  │ │ │     │ │ ├── ansi-styles@2.0.1
  │ │ │     │ │ ├── escape-string-regexp@1.0.3
  │ │ │     │ │ ├─┬ has-ansi@1.0.3
  │ │ │     │ │ │ ├── ansi-regex@1.1.1
  │ │ │     │ │ │ └── get-stdin@4.0.1
  │ │ │     │ │ └─┬ strip-ansi@2.0.1
  │ │ │     │ │   └── ansi-regex@1.1.1
  │ │ │     │ ├── extend-shallow@1.1.2
  │ │ │     │ ├─┬ file-reader@1.0.0
  │ │ │     │ │ ├─┬ extend-shallow@0.2.0
  │ │ │     │ │ │ └── array-slice@0.2.3
  │ │ │     │ │ ├─┬ map-files@0.3.0
  │ │ │     │ │ │ ├─┬ globby@0.1.1
  │ │ │     │ │ │ │ ├── array-differ@0.1.0
  │ │ │     │ │ │ │ ├─┬ array-union@0.1.0
  │ │ │     │ │ │ │ │ └── array-uniq@0.1.1
  │ │ │     │ │ │ │ └─┬ glob@4.5.3
  │ │ │     │ │ │ │   ├─┬ inflight@1.0.4
  │ │ │     │ │ │ │   │ └── wrappy@1.0.1
  │ │ │     │ │ │ │   ├── inherits@2.0.1
  │ │ │     │ │ │ │   ├─┬ minimatch@2.0.4
  │ │ │     │ │ │ │   │ └─┬ brace-expansion@1.1.0
  │ │ │     │ │ │ │   │   ├── balanced-match@0.2.0
  │ │ │     │ │ │ │   │   └── concat-map@0.0.1
  │ │ │     │ │ │ │   └─┬ once@1.3.1
  │ │ │     │ │ │ │     └── wrappy@1.0.1
  │ │ │     │ │ │ └─┬ relative@0.1.6
  │ │ │     │ │ │   └── normalize-path@0.1.1
  │ │ │     │ │ └─┬ read-yaml@1.0.0
  │ │ │     │ │   ├─┬ js-yaml@3.2.7
  │ │ │     │ │   │ ├─┬ argparse@1.0.2
  │ │ │     │ │   │ │ ├── lodash@3.6.0
  │ │ │     │ │   │ │ └── sprintf-js@1.0.2
  │ │ │     │ │   │ └── esprima@2.0.0
  │ │ │     │ │   └── xtend@4.0.0
  │ │ │     │ ├─┬ for-own@0.1.3
  │ │ │     │ │ └── for-in@0.1.4
  │ │ │     │ └── has-values@0.1.3
  │ │ │     ├─┬ chalk@0.5.1
  │ │ │     │ ├── ansi-styles@1.1.0
  │ │ │     │ ├── escape-string-regexp@1.0.3
  │ │ │     │ ├─┬ has-ansi@0.1.0
  │ │ │     │ │ └── ansi-regex@0.2.1
  │ │ │     │ ├─┬ strip-ansi@0.3.0
  │ │ │     │ │ └── ansi-regex@0.2.1
  │ │ │     │ └── supports-color@0.2.0
  │ │ │     ├─┬ micromatch@1.6.2
  │ │ │     │ ├── extglob@0.2.0
  │ │ │     │ └─┬ parse-glob@2.1.1
  │ │ │     │   ├── glob-base@0.1.1
  │ │ │     │   └── glob-path-regex@1.0.0
  │ │ │     └─┬ to-key@1.0.0
  │ │ │       ├── arr-map@1.0.0
  │ │ │       └── for-in@0.1.4
  │ │ ├── arrify@1.0.0
  │ │ ├── async-each@0.1.6
  │ │ ├── glob-parent@1.2.0
  │ │ ├─┬ is-binary-path@1.0.0
  │ │ │ └── binary-extensions@1.3.0
  │ │ ├── is-glob@1.1.3
  │ │ └─┬ readdirp@1.3.0
  │ │   ├── graceful-fs@2.0.3
  │ │   ├─┬ minimatch@0.2.14
  │ │   │ ├── lru-cache@2.5.2
  │ │   │ └── sigmund@1.0.0
  │ │   └─┬ readable-stream@1.0.33
  │ │     ├── core-util-is@1.0.1
  │ │     ├── inherits@2.0.1
  │ │     ├── isarray@0.0.1
  │ │     └── string_decoder@0.10.31
  │ └── graceful-fs@3.0.6
  └─┬ webpack-core@0.6.3
    ├── source-list-map@0.1.5
    └─┬ source-map@0.4.2
      └── amdefine@0.1.0


```
