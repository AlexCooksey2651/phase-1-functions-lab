// Want function to take in pickup location, return # of blocks from Scuber Headquarters on 42nd st
// Return of distanceFromHqInBlocks goes into distanceFromHqInFeet - translate blocks to feet (block = 264ft)
// calculate number of feet travelled based on distance. 

function distanceFromHqInBlocks(pickup) {
    return Math.abs(42 - pickup);
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start,destination)
    if (distance < 400) {
        // return 'This one\'s on me!';
        return 0;
    } else if (distance <= 2000) {
        // return `Your fare is $${(distance-400) * 0.02}.`;
        return (distance-400) * 0.02;
    } else if (distance < 2500) {
        // return `Your fare is $25.`;
        return 25;
    } else {
        return 'cannot travel that far';
    }
}