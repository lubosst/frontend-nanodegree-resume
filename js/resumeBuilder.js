/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append(["Lubo"]);

//var awesomeThoughts = "I am Lubo and I am AWESOME";

//var funToughts = awesomeThoughts.replace("AWESOME", "FUN");

//console.log(awesomeThoughts);

//$("#main").append([funToughts]);


var formattedName = HTMLheaderName.replace("%data%", "Lubo janovicky");

var formattedRole = HTMLheaderName.replace("%data%", "ATT mravec");


$("#main").prepend([formattedRole]);
$("#main").prepend([formattedName]);
