module.exports = class PlaygroundPage {
    async validateUrl(url) {
        await browser.waitUntil(async function () {
            return (await this.getUrl()) === url
        }, 5000)
    }

    async open (url) {
        return browser.url(url)
    }

    /*
        open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
    */
}
