

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShadowDomPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputGuidGenerator () {
        return $('<guid-generator>').shadow$('#editField');
    }

    get btnGenerate () {
        return $('<guid-generator>').shadow$('#buttonGenerate');
    }

    get btnCopy () {
        return $('<guid-generator>').shadow$('#buttonCopy');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async generateAndCopyGuid () {
        await this.btnGenerate.click();
        await this.btnCopy.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('shadowdom');
    }
}

module.exports = new ShadowDomPage();