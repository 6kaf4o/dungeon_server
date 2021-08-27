const ServerSide = require('../index');

ServerSide.registerEventListeners('movement', (socket)=>{
    this.players[functions.searchObjectArray(this.players, socket.id, 'id')].location.changeLoc(loc.x, loc.y);
})