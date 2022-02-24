// Code your solution here
function findMatching(drivers, name){
    const matchingNames = drivers.filter(function (driver){
        return driver.toUpperCase() === name.toUpperCase();
    });
    return matchingNames;
}

function fuzzyMatch(drivers, startsWith){
    const matchingNames = drivers.filter(function (driver){
        return driver.toUpperCase().substring(0,startsWith.length) === startsWith.toUpperCase();
    });
    return matchingNames;
}

function matchName(drivers, name){
    const matchingNames = drivers.filter(function (driver){
        return driver.name.toUpperCase() === name.toUpperCase();
    });
    return matchingNames;
}