const ServerSide = require('../index');
const Bullet = require("./classes/bullet");
const Location = require("./classes/location");
const Master = require("./classes/master");

ServerSide.registerEventListeners('shot', (socket, ...args)=>{
    let bullet = new Bullet(arg.Bullet.X, arg.Bullet.Y, socket.id, arg.Bullet.dx, arg.Bullet.dy, 10, 10)
    this.players[functions.searchObjectArray(this.players, socket.id, 'id')].location.changeLoc(arg.Player.X, arg.Player.Y);
    this.bullets.push(bullet);
    this.io.emit('packet', new Master(this.players, bullet));
})