const Inventory = require("./inventory")
const Location = require("./location")

module.exports = class Player{
    constructor(id, location, inventory){

        //the id of the player
        this.id = id;
        
        this.location = location;

        this.inventory = inventory;
    }

}