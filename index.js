const Server = require('./server');
const functions = require('./Functions');
const Player = require("./Classes/player");
const Bullet = require("./classes/bullet");
const Inventory = require("./classes/inventory");
const Location = require("./classes/location");
const Master = require("./classes/master");

class ServerSide extends Server{
    constructor(){
        super('/client/dungeon_client/production');

        //Every online player is in players array
        this.players = [];
        //Every bullet shot (before hitting smth) is in bullets array
        this.bullets = [];

        //On websocket (socket.io) connection
        this.io.on('connection', (socket) =>{
            console.log(socket.id);
            //Register the new Player
            this.players[this.players.length] = new Player(socket.id, new Location(0, 0, 0, 0), new Inventory());

            socket.socket(socket.id).emit('connected')

            //Pick up the player movement (triggered every 10ms)
            socket.on("movement", (loc) =>{
                this.players[functions.searchObjectArray(this.players, socket.id, 'id')].location.changeLoc(loc.x, loc.y);
            });

            //Pick up the player shooting (triggered every time a shot has been done)
            socket.on("shot", (arg)=>{
                let bullet = new Bullet(arg.Bullet.X, arg.Bullet.Y, socket.id, arg.Bullet.dx, arg.Bullet.dy, 10, 10)
                this.players[functions.searchObjectArray(this.players, socket.id, 'id')].location.changeLoc(arg.Player.X, arg.Player.Y);
                this.bullets.push(bullet);
                this.io.emit('packet', new Master(this.players, bullet));
            })
            

            //When the player disconnect
            socket.on("disconnect", (args) =>{
                //Removing the disconnected player from players array
                this.players = this.players.filter(p => p.id != socket.id);
            });
            
        });

    }

    update(){
        this.io.emit('players', this.players);
    }

}

serverSide = new ServerSide;
serverSide.handleHttpReq('/', (req, res)=>{res.sendFile(__dirname + "/client/dungeon_client/production/main.html")});
serverSide.start(80);
serverSide.init();
