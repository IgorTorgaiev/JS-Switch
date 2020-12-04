var month;
switch(new Date().getMonth()){
    case 0:
        month="January";
        break;
    case 1:
        month="February";
        break;
    case 2:
        month="March";
        break;
    case 3:
        month="April";
        break;
    case 4:
        month="May";
        break;
    case 5:
        month="June";
        break;
    case 6:
        month="July";
        break;
    case 7:
        month="August";
        break;
    case 8:
        month="September";
        break;
    case 9:
        month="October";
        break;
    case 10:
        month="November";
        break;
    case 11:
        month="December";

}
document.getElementById("month").innerHTML = "The current month of the year is " + month;

// Default

var season;
switch (new Date().getMonth()){
    case 11: 
        season = "We can play snowballs if the snow falls";
        break;
    case 6:
        season = "We can go to the river";
        break;
    default:
        season = "None of the above"; 
}
document.getElementById("season").innerHTML = season;

// Let's play a little bit and mix the months

var txt;
switch(new Date().getFullYear()){
    case 11:
        txt = "We can sunbathe";
        break;
    case 6: 
        txt = "Let's play snowballs";
        break;
    default:
        txt = "None of the above"
}
document.getElementById("season1").innerHTML = txt;

// Common Code Blocks

var text;
switch(new Date().getDay()){
    case 5:
    case 6:
        text = "I can sleep more";
        break;
    case 1:
    case 2:
    case 3:
        text = "I have to work and no time to think of weekend";
}
document.getElementById("day").innerHTML = text;
