functions = {}

functions.searchObjectArray = (array, searchTerm, property, returnAll = false)=>{
    let result = [];
    for(let i = 0, l = array.length; i < l; i++){
        if(array[i][property] === searchTerm){
            if(!returnAll) return i;
            else result.push(i);
        }
    }
    if(!returnAll) return -1;
    else return result;
}

functions.rectCircleColliding = (circle,rect)=>{
    let distX = Math.abs(circle.x - rect.pos.x - rect.size.x/2);
    let distY = Math.abs(circle.y - rect.pos.y - rect.size.y/2);
    let dx = distX-rect.size.x/2;
    let dy = distY-rect.size.y/2;

    if (distX > (rect.size.x/2 + circle.radius) || distY > (rect.size.y/2 + circle.radius)) {
        return false; 
    }

    if ((distX < (rect.size.x/2) || distY < (rect.size.y/2)) || (dx * dx + dy * dy <= (circle.radius * circle.radius))) {
        return true; 
    }
    return undefined;
}

functions.areCirclesColliding = (x1, y1, r1, x2, y2, r2)=>{
    let dist = Math.sqrt((x1-x2)(x1-x2) + (y1-y2)(y1-y2))
    return dist<=r1+r2; 
}

functions.areColliding = (Ax, Ay, Awidth, Aheight, Bx, By, Bwidth, Bheight)=>{
    if (Bx <= Ax + Awidth) {
        if (Ax <= Bx + Bwidth) {
            if (By <= Ay + Aheight) {
                if (Ay <= By + Bheight) {
                    return true;
                }
            }
        }
    }
    return false;
};

module.exports = functions