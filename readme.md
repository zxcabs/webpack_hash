```
npm install
rm -rf ./revision_one/compile/*.* ./revision_two/compile/*.*
cd ./revision_one && ../node_modules/.bin/webpack --config ./webpack.config.js
Hash: e6c2d1d4cd334a29bece
Version: webpack 1.8.4
Time: 118ms
                               Asset      Size  Chunks             Chunk Names
320fa55e0efc5c0191295f703abebc30.css  27 bytes          [emitted]  
        main_a6874066b7acafa0b8a7.js   4.12 kB       0  [emitted]  main
                            main.map   4.33 kB       0  [emitted]  main
   [0] ./src/main.js 134 bytes {0} [built]
   [1] ./src/vendor/fake.jquery.js 85 bytes {0} [built]
    + 3 hidden modules
cd ./revision_two && ../node_modules/.bin/webpack --config ./webpack.config.js
Hash: e6c2d1d4cd334a29bece
Version: webpack 1.8.4
Time: 117ms
                               Asset      Size  Chunks             Chunk Names
320fa55e0efc5c0191295f703abebc30.css  27 bytes          [emitted]  
        main_a6874066b7acafa0b8a7.js   4.12 kB       0  [emitted]  main
                            main.map   4.33 kB       0  [emitted]  main
   [0] ./src/main.js 134 bytes {0} [built]
   [1] ./src/vendor/fake.jquery.js 85 bytes {0} [built]
    + 3 hidden modules

```


```
diff revision_one/compile/main_*.js revision_two/compile/main_*.js	

```
