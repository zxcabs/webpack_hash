WEBPACK=../node_modules/.bin/webpack

init:
	npm install

clean:
	rm -rf ./revision_one/compile/*.* ./revision_two/compile/*.*

diff:
	diff revision_one/compile/main_*.js revision_two/compile/main_*.js	

compile: init clean
	cd ./revision_one && $(WEBPACK) --config ./webpack.config.js
	cd ./revision_two && $(WEBPACK) --config ./webpack.config.js

check:
	node makereadme.js

.PHONY: diff init clean compile check
