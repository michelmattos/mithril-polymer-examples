'use strict';

var m = require('../../../bower_components/mithril/mithril'),
	app = require('./app-wrapper');

describe('app.js', function() {

	describe('> todo.Todo', function() {
		var todo;

		beforeEach(function() {
			todo = new app.Todo({description: "desc 01"});
		});
		
		it('should have "done" set to FALSE by default', function() {
			expect(todo.done()).toBe(false);
		});
		
		it('should return the same description', function() {
			expect(todo.description()).toBe("desc 01");
		});
		
		it('should permit to change the description', function() {
			todo.description("new desc");
			
			expect(todo.description()).toBe("new desc");
		});
		
		it('should permit to be done', function() {
			todo.done(true);
			
			expect(todo.done()).toBe(true);
		});

	});
});