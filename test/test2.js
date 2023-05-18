function askPassword(ok, fail) {

    let password = "abc";

    if (password == "rockstar") ok();

    else fail();

}

let user = {

    name: "john",

    loginOk() {

        console.log(`${this.name} logged in`);

    },

    loginFail() {

        console.log(`${this.name} failed to log in`);

    },

};

askPassword.call(user, user.loginOk, user.loginFail);