let docsPage = function () {

    this.buttonGettingStarted = element(by.css('aio-nav-menu')).$('[title="A gentle introduction to Angular."]');
    this.buttonTutorial = element(by.css('aio-nav-menu')).$('[title="The Tour of Heroes tutorial takes you through the steps of creating an Angular application in TypeScript."]');
    this.buttonFundamentals = element(by.css('aio-nav-menu')).$('[title="The fundamentals of Angular"]');
    this.buttonTechniques = element(by.css('aio-nav-menu')).$('[title="Techniques for putting Angular to work in your environment"]');
    this.buttonApi = element(by.css('aio-nav-menu')).$('[title="Details of the Angular classes and values."]');
    this.buttonVersionSite = element(by.css('.form-select-menu')).$('[class="form-select-button"]');
    this.buttonHttp = element.all(by.css('aio-nav-item.ng-star-inserted')).get(9);//$('a[title="Part 8: Use HTTP to retrieve and save hero data."]')
    this.fieldSearch = element(by.css('input'));
    this.rightMenuLink = element.all(by.css('ul.toc-list li')).get(2);
    this.linkChineseLangVersion = element(by.css('.link[title="中文版"]'));
    this.buttonDoscMenu = element(by.css('.hamburger.mat-button'));
};

module.exports = new docsPage();