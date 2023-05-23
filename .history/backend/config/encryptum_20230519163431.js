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
        [1,2,3,x,5]
        [x,2,3,4,5]
        [1,2,x,4,5]
        [1,2,3,4,x]
        [1,2,3,4,5]
    ]

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