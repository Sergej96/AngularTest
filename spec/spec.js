let docsPage = require('../docs_Page.js');

describe('test https://angular.io/docs', function () {
    beforeEach(async function () {
        await browser.get('https://angular.io/docs');
        await browser.manage().window().maximize();
    });

    it('Open https://angular.io/docs', async function () {
        await expect(browser.getCurrentUrl()).toContain('https://angular.io/docs');
        await expect(docsPage.buttonGettingStarted.getText()).toEqual('GETTING STARTED');
        await expect(docsPage.buttonTutorial.getText()).toEqual('TUTORIAL');
        await expect(docsPage.buttonFundamentals.getText()).toEqual('FUNDAMENTALS');
        await expect(docsPage.buttonTechniques.getText()).toEqual('TECHNIQUES');
        await expect(docsPage.buttonApi.getText()).toEqual('API');
        await expect(docsPage.buttonVersionSite.getText()).toEqual('stable (v6.0.4)');

    });
    it('Test serch', async function (done) {
        await docsPage.fieldSearch.sendKeys('http');
        await browser.sleep(10000);
        element.all(by.className('search-area ng-star-inserted'))
            .then((array) => expect(array.length).toBe(4))
            .then(() => done())
            .catch(done.error);
    });

    it('Negative test serch', async function (done) {
        await docsPage.fieldSearch.sendKeys('http1');
        await browser.sleep(10000);
        element(by.css('.search-results')).$('.ng-star-inserted').getText()
            .then((text) => expect(text).toEqual('No results found.'))
            .then(() => done())
            .catch(done.error);

    });

    it('Click on Home', async function () {
        await element(by.className('nav-link home')).click();
        expect(browser.getCurrentUrl()).toBe('https://angular.io/');
    });

    it('Click on Featers', async function () {
        await element(by.cssContainingText('.nav-link', 'Features')).click();
        expect(browser.getCurrentUrl()).toBe('https://angular.io/features');
    });

    it('Click on Docs', async function () {
        await element(by.cssContainingText('.nav-link', 'Docs')).click();
        expect(browser.getCurrentUrl()).toBe('https://angular.io/docs');
    });

    it('Click on Resurses', async function () {
        await element(by.cssContainingText('.nav-link', 'Resources')).click();
        expect(browser.getCurrentUrl()).toBe('https://angular.io/resources');
    });

    it('Click on Events', async function () {
        await element(by.cssContainingText('.nav-link', 'Events')).click();
        expect(browser.getCurrentUrl()).toBe('https://angular.io/events');
    });

    it('Click on Blog', async function () {
        await element(by.cssContainingText('.nav-link', 'Blog')).click();
        browser.ignoreSynchronization = true;
        expect(browser.getCurrentUrl()).toBe('https://blog.angular.io/');
        browser.ignoreSynchronization = false;
    });

    it('Click on Docs menu', async function (done) {
        await docsPage.buttonDoscMenu.click()
            .then(() => element(by.css('mat-sidenav-content')))
            .then((el) => el.getAttribute('style'))
            .then(function (attr) {
                expect(attr).toBe('margin-left: 0px; margin-right: 0px;');
            })
            .then(() => docsPage.buttonDoscMenu.click())
            .then(() => element(by.css('mat-sidenav-content')))
            .then((el) => el.getAttribute('style'))
            .then(function (attr) {
                expect(attr).toBe('margin-left: 268px; margin-right: 0px;');
            })
            .then(() => done())
            .catch(done.error);
    });

    it('Test link "8.HTTP" click', async function () {
        await docsPage.buttonTutorial.click();
        await docsPage.buttonHttp.click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/tutorial/toh-pt6');

    });

    it('Chinese version link', async function () {
        await docsPage.linkChineseLangVersion.click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.cn/');
    });

});