/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*$("#main").append("Sambandham.S");

 var awesomeThoughts = "I am AWESOME!!!";
 var funThoughts = awesomeThoughts.replace("AWESOME" , "FUN");
 console.log(awesomeThoughts);
 console.log(funThoughts);*/
 var bio = {
  "name": "Sambandham Sakthivel",
  "role": "Front End Web Dev",
  "contacts": {
    "mobile": "555-55-855",
    "email": "sambaerode@gmail.com",
    "github": "Sambandham",
    "location": "Erode",
  },

  "welcomeMessage" : " Welcome to my Resume!!!....I have keen interest in software Development and I love Android programming and I am pretty well in electronics programming . Since i like Website development,currently i am pursuing my online Front End Web Development nanodegree program",
  "skills" : [ "Android", "HTML", "CSS", "JS" ],
  "bioPic": "images/fry.jpg",
  };

  var work = {
    "jobs" : [
    {
        "employer" : "JIT",
        "title" : "Digital Signal Processing club Secretary",
        "dates" : "2015-2016",
        "location" : "Coimbatore",
        "description" : "Worked as a Secretary for the club in my College"
    },
    {
        "employer" : "JIT",
        "title" : "Arduino club Member",
        "dates" : "2015-2016",
        "location" : "Coimbatore",
        "description" : "Worked as a Member for the club in my College"
    },
    ]
};

var projects = {
    "project" : [{
        "title" : "Aero Amphibian Robot",
        "dates" : "2015",
        "description" : "A car that can move in Air , Land and water",
        "images" : ["images/two.jpg"]
    },
    {
        "title" : "Automatic Waste Segregator",
        "dates" : "2016",
        "description" : "Machine that can be used to seperate Organic , Inorganic and Metallic Wastes",
        "images" : ["images/one.jpg"]
    }]
};

var education = {
    "schools" : [{
        "name" : "BVB M.H.S.S",
        "location" : "Thindal",
        "degree" : "H.S.C",
        "majors" : "computer science",
        "dates" : "2010-2012",
        "url" : "info@bvb.com"
    },
    {
        "name" : "JIT",
        "location" : "Coimbatore",
        "degree" : "B.E.",
        "majors" : "ECE",
        "dates" : "2012-2016",
        "url" : "info@jit.com"
    }],
    "onlineCourses" : [{
        "title" : "Front-End Web Developer Nanodegree",
        "school" : "udacity",
        "dates" : "2016-2017",
        "url" : "https://www.udacity.com/course/nd001"
    }]
};

bio.display =function() {

    var formattedName= HTMLheaderName.replace("%data%", bio.name);
    var formattedRole= HTMLheaderRole.replace("%data%",bio.role);
    var formattedBioPic= HTMLbioPic.replace('%data%',bio.bioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage)

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedwelcomeMsg);

    $("#header").append(HTMLskillsStart);

    for(skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#skills").append(formattedSkills);
    };

    var formattedMail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts , #footerContacts").append(formattedMail,formattedMobile,formattedGithub);

}


work.display = function() {
    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
    }
};


projects.display = function(){
    for(item in projects.project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);

        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

        for (image in projects.project[item].images) {
            var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
            $(".project-entry:last").append(formattedImage);
        };

    }
};

education.display = function() {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);

        //$("#education").append(HTMLonlineClasses);

        //var formattedOnlineTitle = HTMLonlineTitle.replace("%data%" , education.onlineCourses.title);
        //var formattedOnlineSchool= HTMLonlineSchool.replace("%data%" , education.onlineCourses.school);
        //var formattedOnlineDates = HTMLonlineDates.replace("%data%" , education.onlineCourses.dates);
        //var formattedOnlineUrl   = HTMLonlineURL.replace("%data%" , education.onlineCourses.url);

        //$(".education-entry:last").append(formattedOnlineTitle);





      }
}

function inName(name){
    console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

    return newName;
};

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

