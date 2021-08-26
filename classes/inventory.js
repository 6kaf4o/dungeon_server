module.exports = class Inventory{
    constructor(){
        this.weapons = [];
        this.items = [];
        this.bullets = [];
    }

    addWeapon(name){
        this.weapons.push(name);
    }
    removeWeapon(name){
        this.weapons = this.weapons.filter(w => w != name);
    }

    addItems(name){
        this.items.push(name);
    }
    removeItems(name){
        this.items = this.items.filter(i => i != name);
    }

    addBullets(name){
        this.bullets.push(name);
    }
    removeBullets(name){
        this.bullets = this.bullets.filter(b => b != name);
    }

}