const Player = require('./player')
const Bullet = require('./bullet')

module.exports = class Matser{
    constructor(){
        this.Player = false;
        this.Bullet = false;
    }
    setPlayer(Player){
        this.Player = Player;
    }
    setBullet(Bullet){
        this.Bullet = Bullet;
    }
    getPlayer(){
        return this.Player;
    }
    getBullet(){
        return this.Bullet;
    }

}