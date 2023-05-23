// Dependencies //
const crypto = require('crypto');

// Main Code //
class Encryptum {
    #jwt = false;

    newJwt(){
        try{
            this.#jwt = crypto.randomBytes(32).toString('hex');
            console.log("JWT SECRET KEY GENERATED")
        } catch(err) {
            console.log(err)
        }
    }

    [
        [x,2,3,4]
        [1,2,x,4]
        [1,x,3,4]
        [1,2,3,x]
    ]

    let a = 1;
    let b = 2;

    a = a*10+b;
    b = (a-b)/10;
    a = a%10+b;

    a= b

    substr

    showJwt(){
        if(this.#jwt){
            console.log("JWT SECRET KEY: " + this.#jwt);
        } else {
            console.log("JWT SECRET KET WASNT GENERATED YET");
        }
    }

    setTokens(){
        global.JWT_SECRET_KEY = this.#jwt;
        console.log("TOKENS SETTED GLOBALLY");
    }

    restartTokens(){
        this.newJwt();
        this.setTokens();
        console.log("TOKENS RESTARTED");
    }
}

module.exports = Encryptum;