var txt;
var destination;
var suggestion;

function myFunction() {
    var vacationType = prompt("What kind of trip would you like to go on: musical, tropical, or adventurous?", "musical");
    console.log(vacationType);

    if (vacationType == null || vacationType == "") {
        alert("Please enter a valid trip.");
    }
    else if (vacationType == "musical") {
        destination = "New Orleans";
    }
    else if (vacationType == "tropical") {
        destination = "a Beach Vacation in Mexico";
    }
    else if (vacationType == "adventurous") {
        destination = "Whitewater Rafting the Grand Canyon";
    }

    var groupSize = prompt("How many are in your group?", "0");
    console.log(groupSize);

    if (groupSize >= 1 && groupSize <= 2) {
        suggestion = "First Class flight";
    }
    if (groupSize >= 3 && groupSize <= 5) {
        suggestion = 'Helicopter'
    }
    if (groupSize >= 6) {
        suggestion = 'Charter Flight'
    }

    var result = "Since you're in a group of " + groupSize + " going on a " + vacationType + " vacation you should take a " + suggestion + " to " + destination;
    alert(result);
    console.log(result);
}