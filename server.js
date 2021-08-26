module.exports = class Server{
    constructor(defaultFilePath){
        //Using express
        this.express = require('express');
        this.app = this.express();

        //Get http server
        this.http = require('http').Server(this.app);

        //Using socket.io
        this.io = require('socket.io')(this.http);

        this.defaultFilePath = defaultFilePath;

        //The port of the server
        this.port;

        //Makes everything in folder static
        this.app.use("/", this.express.static(__dirname +  this.defaultFilePath));

        this.eventListeners = []

    }

    registerEventListeners(funct){
        this.eventListeners.push(funct);
    }


    handleHttpReq(path, funct){
        this.app.get(path, function(req, res){
            funct(req, res);
        });
    }

    start(port){
        //Starting the server on 80 port
        this.http.listen(port, function(){
            this.port = port;
            console.log("server started on port " + port);
        }); 
    }

    init(){
        setInterval(this.update.bind(this), 10);
    }

    update(){}

}
