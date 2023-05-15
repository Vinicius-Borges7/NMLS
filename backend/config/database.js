require('dotenv').config();
const mongoose = require('mongoose')
const { DB_URI, DB_NAME } = process.env;

class Database {
    #dbUri;
    #dbName;
    #route;

    constructor(route = "???"){
        this.#dbUri = DB_URI;
        this.#dbName = DB_NAME;
        this.#route = route;
    }

    async connect(){
        try {
            await mongoose.connect(this.#dbUri, {
                dbName: this.#dbName,
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

            console.log(this.#route + " CONNECTION ESTABILISHED");
        } catch (error) {
            console.error(error.message);
            process.exit(1);
        }
    }
}

module.exports = Database;