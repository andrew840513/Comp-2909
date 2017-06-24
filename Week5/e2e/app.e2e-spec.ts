import { Week5Page } from './app.po';
import { browser, element, by } from 'protractor';

describe('myapp App', function() {
  let page: Week5Page;

  beforeEach(() => {
    page = new Week5Page();
  });

  it('Testing one element by tag name.', () => {
    page.navigateTo();
    const headerElement = element(by.tagName('h1'));
    expect(headerElement.getText()).toEqual('Morning Show');
  });

  it('Testing a list of items.', () => {
    // Get list of elements.
    const elements = element.all(by.tagName('li'));
    expect(elements.count()).toEqual(3);

    // Check text of first element.
    expect(elements.get(0).getText()).toEqual('John');
  });
  function ProcessPromiseResults(elements, originalCount) {
    expect(elements.count()).toEqual(originalCount);
    console.log('The count is: ' + originalCount);
    expect(elements.get(0).getText()).toEqual('John');
    expect(elements.get(originalCount - 1).getText()).toEqual('Nira');
  }

  it('Dynamically count items.', function () {
    const elements = element.all(by.tagName('li'));

    // Set up a promise to retrieve the actual count value.
    // Wait for the result and then process it.
    elements.count().then(function (originalCount) {
      ProcessPromiseResults(elements, originalCount);
    });
  });

});
