const HerokuappPage = require('./herokuapp.page');

class LoginPage extends HerokuappPage {
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin() {
        return $('//*[@type="submit"]')
    }

    get flashAlert () {
        return $('#flash');
    }

    async login(username, password){
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnLogin.click()
    }

    open (path) {
        return super.open(`${path}`);
    }
}

module.exports = new LoginPage();