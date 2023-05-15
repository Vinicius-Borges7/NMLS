const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
	name : {
        type : String,
        default : undefined,
        required : false
    },

	email : {
        type : String,
        default : undefined,
        required : true
    },

    password : {
        type : String,
        default : undefined,
        required : true
    }
})

userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email })
    .exec()
    .then(user => {
        if (user) {
            return user;
        } else {
            return false;
        }
    });
};

module.exports = mongoose.model('user', userSchema)