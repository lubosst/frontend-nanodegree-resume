/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append(["Lubo"]);
//var awesomeThoughts = "I am Lubo and I am AWESOME";
//var funToughts = awesomeThoughts.replace("AWESOME", "FUN");
//console.log(awesomeThoughts);
//$("#main").append([funToughts]);
//var formattedName = HTMLheaderName.replace("%data%", "Lubo janovicky");
//var formattedRole = HTMLheaderName.replace("%data%", "ATT mravec");
//$("#main").prepend([formattedRole]);
//$("#main").prepend([formattedName]);

var work = [
    {
        employer: "",
        title: "",
        location: "",
        dates: "",
        description: ""
    }
];

var projects = [
    {
        title: "",
        dates: "",
        description: "",
        images: []
    }
];

var bio = {
    name: "Lubomir",
    role: "",
    welcomeMessage: "",
    biotopic: "",
    contacts: {
        mobile: "",
        email: "",
        github: "",
        twitter: "",
        location: "",
    },
    skills: ["varenie", "pocuvanie"]
};

var education = {
    schools: [
        {
            name: "",
            location: "",
            degree: "",
            dates: "",
            url: "",
            majors: [],
        },
    ],
    onlineCourses: [
        {
            title: "",
            school: "",
            dates: "",
            url: ""
        }
    ]
};

//var headerBig = HTMLheaderName.replace("%data%", bio.name);
$("#header").append([HTMLheaderName.replace("%data%", bio.name)]);

if (bio.skills.length > 0) {
    $("#header").append([HTMLskillsStart]);
    var formattedSkill = "";
    for (var i = 0; i < bio.skills.length; i++) {
        formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    };
};
