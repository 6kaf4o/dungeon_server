module.exports = class Bullet{
    constructor(type, shooter, X, Y, dX, dY, sX, sY){
        this.type = type;
        this.shooter = shooter; //Player object
        this.X = X;
        this.Y = Y;
        this.dX = dX;
        this.dY = dY;
        this.sX = sX;
        this.sY = sY;
    }
    update(){
        this.X += this.dx;
        this.Y += this.dy;
    }
}