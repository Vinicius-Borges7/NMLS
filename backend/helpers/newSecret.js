const crypto = require('crypto');

module.exports = function newSecret(){
    try{
        global.JWT_SECRET_KEY = crypto.randomBytes(32).toString('hex');
        console.log("JWT TOKEN SECRET KEY GENERATED")
    } catch(err) {
        console.log(err)
    }
}