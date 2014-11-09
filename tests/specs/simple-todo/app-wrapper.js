/*
	This is a simple wrapper for the "app.js" to make it into a NodeJS module.
*/

var fs = require('fs'),
    vm = require('vm');

vm.runInThisContext(fs.readFileSync(__dirname+'/../../../src/simple-todo/app.js'));

module.exports = todo;