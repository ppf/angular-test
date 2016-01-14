'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /todos when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/todos");
  });


  describe('todos', function() {

    beforeEach(function() {
      browser.get('index.html#/todos');
    });


    it('should render todos when user navigates to /todos', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/TODOS/);
    });

  });


  describe('users', function() {

    beforeEach(function() {
      browser.get('index.html#/users');
    });


    it('should render users when user navigates to /users', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/USERS/);
    });

  });
});
