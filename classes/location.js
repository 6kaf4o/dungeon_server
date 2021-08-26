module.exports = class Location{
    constructor(X, Y, spawnLocX, spawnLocY){
        this.X = X;
        this.Y = Y;
        this.spawnLocX = spawnLocX;
        this.spawnLocY = spawnLocY;
    }

    change(loc){
        this.X = loc.X;
        this.Y = loc.Y;
        this.spawnLocX = loc.spawnLocX;
        this.spawnLocY = loc.spawnLocY;
    }

    changeLoc(X, Y){
        this.X = X;
        this.Y = Y;
    }
    changeSpawnLoc(spawnLocX, spawnLocY){
        this.spawnLocX = spawnLocX;
        this.spawnLocY = spawnLocY;
    }
}