WEBPACK=../node_modules/.bin/webpack

init:
	npm install

clean:
	rm -rf ./revision_one/compile/*.* ./revision_two/compile/*.*

compile: init clean
	cd ./revision_one && $(WEBPACK) --config ./webpack.config.js
	cd ./revision_two && $(WEBPACK) --config ./webpack.config.js

.PHONY: init clean compile
