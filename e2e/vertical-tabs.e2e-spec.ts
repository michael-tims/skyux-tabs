import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

import {
  element,
  by,
  browser
} from 'protractor';

describe('Vertical Tabs', () => {
  it('should match previous vertical tabset screenshot', (done) => {
    SkyHostBrowser.get('visual/vertical-tabset');
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#screenshot-vertical-tabset');
    expect('#screenshot-vertical-tabset').toMatchBaselineScreenshot(done, {
      screenshotName: 'vertical-tabset'
    });
  });

  it('should match previous vertical tabset screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/vertical-tabset');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-vertical-tabset');
    expect('#screenshot-vertical-tabset').toMatchBaselineScreenshot(done, {
      screenshotName: 'vertical-tabset-xs'
    });
  });

  it('should match previous vertical tabset screenshot after clicking tab', (done) => {
    SkyHostBrowser.get('visual/vertical-tabset');
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#screenshot-vertical-tabset');
    const groupElement = element(by.css('.group2'));
    browser.wait(function () { return browser.isElementPresent(groupElement); }, 8000);

    // open group
    groupElement.click();

    // click tab
    element(by.id('group2Tab2')).click();
    expect('#screenshot-vertical-tabset').toMatchBaselineScreenshot(done, {
      screenshotName: 'vertical-tabset-clicked-tab'
    });
  });

  it('should match previous vertical tabset screenshot after clicking tab (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/vertical-tabset');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-vertical-tabset');
    const showTabsButton =
      element(by.css('#screenshot-vertical-tabset .sky-vertical-tabset-show-tabs-btn'));
    browser.wait(function () { return browser.isElementPresent(showTabsButton); }, 8000);

    // show tabs
    showTabsButton.click();

    // open group
    element(by.css('.group2')).click();

    // click tab
    element(by.id('group2Tab2')).click();
    expect('#screenshot-vertical-tabset').toMatchBaselineScreenshot(done, {
      screenshotName: 'vertical-tabset-xs-clicked-tab'
    });
  });

  it('should match previous vertical tabset screenshot after clicking show tabs (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/vertical-tabset');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-vertical-tabset');
    const showTabsButton =
      element(by.css('#screenshot-vertical-tabset .sky-vertical-tabset-show-tabs-btn'));
    browser.wait(function () { return browser.isElementPresent(showTabsButton); }, 8000);

    // show tabs
    showTabsButton.click();

    expect('#screenshot-vertical-tabset').toMatchBaselineScreenshot(done, {
      screenshotName: 'vertical-tabset-mobile-show-tabs'
    });
  });

  it('should match previous vertical tabset screenshot without groups', (done) => {
    SkyHostBrowser.get('visual/vertical-tabset');
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#screenshot-vertical-tabs-no-groups');
    expect('#screenshot-vertical-tabs-no-groups').toMatchBaselineScreenshot(done, {
      screenshotName: 'vertical-tabset-no-groups'
    });
  });

  it('should match previous modal screenshot', (done) => {
    SkyHostBrowser.get('visual/vertical-tabset');
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#vertical-tabset-modal-launcher');
    element(by.css('#vertical-tabset-modal-launcher')).click();
    SkyHostBrowser.scrollTo('#screenshot-vertical-tabset-modal');
    expect('#screenshot-vertical-tabset-modal').toMatchBaselineScreenshot(done, {
      screenshotName: 'vertical-tabset-modal'
    });
  });
});
