// Dependencies //
require('dotenv').config();
const { PORT } = process.env;

// Main Code //
class Server {
    #app;
    #port;

    constructor(app = null){
        this.#app = app;
        this.#port = PORT;        
    }

    start(){
        this.#app.listen(this.#port, () => {
            console.log("SERVER RUNING IN PORT " + this.#port);
        });
    }
}

module.exports = Server;