```
make[1]: Entering directory `/home/user/projects/webpack_hash'
npm install
rm -rf ./revision_one/compile/*.* ./revision_two/compile/*.*
cd ./revision_one && ../node_modules/.bin/webpack --config ./webpack.config.js
Hash: 497580595bc3841f09bc
Version: webpack 1.8.4
Time: 168ms
                               Asset      Size  Chunks             Chunk Names
320fa55e0efc5c0191295f703abebc30.css  27 bytes          [emitted]  
        main_326a8461bee0acca1a4d.js   4.24 kB       0  [emitted]  main
                            main.map   4.52 kB       0  [emitted]  main
   [0] ./src/main.js 134 bytes {0} [built]
   [1] ./src/vendor/fake.jquery.js 85 bytes {0} [built]
    + 3 hidden modules
cd ./revision_two && ../node_modules/.bin/webpack --config ./webpack.config.js
Hash: d5461298b734383ad306
Version: webpack 1.8.4
Time: 116ms
                               Asset      Size  Chunks             Chunk Names
320fa55e0efc5c0191295f703abebc30.css  27 bytes          [emitted]  
        main_77137487f7aeb916be6d.js   4.24 kB       0  [emitted]  main
                            main.map   4.52 kB       0  [emitted]  main
   [0] ./src/main.js 134 bytes {0} [built]
   [1] ./src/vendor/fake.jquery.js 85 bytes {0} [built]
    + 3 hidden modules
make[1]: Leaving directory `/home/user/projects/webpack_hash'

```


```
make[1]: Entering directory `/home/user/projects/webpack_hash'
diff revision_one/compile/main_*.js revision_two/compile/main_*.js	
86,87c86,87
< 		module.hot.accept("!!/home/user/projects/webpack_hash/node_modules/file-loader/index.js!/home/user/projects/webpack_hash/revision_one/src/style.css", function() {
< 			update(require("!!/home/user/projects/webpack_hash/node_modules/file-loader/index.js!/home/user/projects/webpack_hash/revision_one/src/style.css"));
---
> 		module.hot.accept("!!/home/user/projects/webpack_hash/node_modules/file-loader/index.js!/home/user/projects/webpack_hash/revision_two/src/style.css", function() {
> 			update(require("!!/home/user/projects/webpack_hash/node_modules/file-loader/index.js!/home/user/projects/webpack_hash/revision_two/src/style.css"));
make[1]: Leaving directory `/home/user/projects/webpack_hash'

```
