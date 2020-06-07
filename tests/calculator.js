describe('todo list', function() {

    it('should list todos', function() {
        
        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('2');

        element(by.model('second')).sendKeys('3');
        
        $('[ng-click="doAddition()"]').click();  // = element(by.css('[ng-click="doAddition()"]')).click();

        let result = element(by.cssContainingText('.ng-binding','5'));

        expect(result.getText()).toEqual('5');

        browser.sleep('2000');
    });
});