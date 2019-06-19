const ta = require('trueautomation-helper').ta;

describe('Using the "select" method', () => {
  it('Test example', () => {
    browser.setTimeout({ 'implicit': 5000 });

    browser.url('https://dipservis.com.ua/cabinet');
    const selectBox = $(ta('wdio:main:dropdown', '#o_type'));
    selectBox.selectByIndex(4);
  });
});
