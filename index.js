// produceDrivingRange() - Returns a function that then calculates whether a given trip is within range.
// For example, produceDrivingRange(10) returns a function that will return false if the trip is over 10 blocks distance 
// and true if the distance is within range.So produceDrivingRange returns a function that we can then use to calculate 
// if a trip is too large for a driver.We recommend referencing the test / indexTest.js for more details.

function produceDrivingRange(blockRange) {
    //is distance from A to B is within blockRange

    return function(distance1, distance2) {
        var difference = Math.abs(parseInt(distance1) - parseInt(distance2))
    if (difference < blockRange) {
        return `within range by ${blockRange - difference}`
    } else {
        return `${difference - blockRange} blocks out of range`

    }
}
}

function produceTipCalculator(amount) {
    return function(tip) {
        return amount * tip
    }
}