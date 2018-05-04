let docsPage = require('../docs_page.js');

describe('test https://angular.io/docs', function () {
    beforeEach(async function () {
        await browser.get('https://angular.io/docs');
        await browser.manage().window().maximize();
    });

    it('Open https://angular.io/docs', async function () {
        expect(browser.getCurrentUrl()).toContain('https://angular.io/docs');
        expect(docsPage.buttonGettingStarted.getText()).toEqual('GETTING STARTED');
        expect(docsPage.buttonTutorial.getText()).toEqual('TUTORIAL');
        expect(docsPage.buttonFundamentals.getText()).toEqual('FUNDAMENTALS');
        expect(docsPage.buttonTechniques.getText()).toEqual('TECHNIQUES');
        expect(docsPage.buttonApi.getText()).toEqual('API');
        expect(docsPage.buttonVersionSite.getText()).toEqual('stable (v5.2.10)');

    });
    it('Test serch', async function () {
        await docsPage.fieldSearch.sendKeys('http');
       await browser.sleep(10000);
       await element.all(by.className('search-area ng-star-inserted')).then(function (array) {
           expect(array.length).toBe(4);
       });

    });

    it('Negative test serch', async function () {
        await docsPage.fieldSearch.sendKeys('http1');
        await browser.sleep(10000);
        await element(by.css('[class="search-results"]')).$('[class="ng-star-inserted"]').getText().then(function (text) {
            expect(text).toEqual('No results found.');
        });

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

    it('Click on Docs menu', function () {
        docsPage.buttonDoscMenu.click()
            .then(() => element(by.css('mat-sidenav-content')))
            .then((el) => el.getAttribute('style'))
            .then(function (attr) {
                expect(attr).toBe('margin-left: 0px; margin-right: 0px;');
            });
        docsPage.buttonDoscMenu.click()
            .then(() => element(by.css('mat-sidenav-content')))
            .then((el) => el.getAttribute('style'))
            .then(function (attr) {
                expect(attr).toBe('margin-left: 268px; margin-right: 0px;');
            });
    });

    it('Test link "8.HTTP" click', async function () {
        await docsPage.buttonTutorial.click();
        await docsPage.buttonHttp.click();
        var title = element(by.css('a[title="Link to this heading"]'));
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/tutorial/toh-pt6');

    });

    it('Chinese version link', async function () {
        await docsPage.linkChineseLangVersion.click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.cn/');
    });

});