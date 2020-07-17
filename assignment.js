/*Task-1: feetToMile*/

function feetToMile(feet) {
    if (feet < 0)
        return "Feet cannot be negative";
    else {
        var mile = feet / 5280;
        return mile;
    }
}



/*Task-2: woodCalculator*/

function woodCalculator(chair,table,bed)
{
   var woodOfChair = chair*1;
   var woodOfTable = table*3;
   var woodOfBed = bed*5;
   var totalWood = woodOfChair + woodOfTable + woodOfBed;
   return totalWood;
}


/*Task-3: brickCalculator*/

function brickCalculator(floor) {

    if (floor >= 1 && floor <= 10) {
        var brick = floor * 15000;
        return brick;
    }
    else if (floor >= 11 && floor <= 20) {
        floor = floor-10;
       var brick = 150000 + (floor * 12000);

        return brick;
    }
    else {

       floor = floor-20;
       var brick = 270000 + (floor * 10000);

        return brick;
    }
}




/* Task-4: tinyFriend */

function tinyFriend(name) {
    var smallest = name[0];
    for (var i = 0; i < name.length; i++) {
        var currentName = name[i];
        if (smallest.length > currentName.length) {
            smallest = currentName;
        }
    }
    return smallest;
}
