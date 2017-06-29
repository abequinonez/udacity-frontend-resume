/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	name: "Abraham Quinonez",
	role: "Web Developer",
	contacts: {
		mobile: "999-999-9999",
		email: "user@email.com",
		github: "abequinonez",
		twitter: "@user",
		location: "Southern California"
	},
	welcomeMessage: "Welcome to my online resume!",
	skills: ["HTML, CSS, & Bootstrap", "JavaScript & jQuery", "SQL", "Database Administration", "Teaching"],
	biopic: "images/biopic.jpg",
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts, #footerContacts").append(formattedMobile);
		$("#topContacts, #footerContacts").append(formattedEmail);
		$("#topContacts, #footerContacts").append(formattedGitHub);
		$("#topContacts, footerContacts").append(formattedTwitter);
		$("#topContacts, #footerContacts").append(formattedLocation);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedMsg);

		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(skill) {
			var formattedSkill = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkill);
		});
	}
};

var work = {
	jobs: [
		{
			employer: "Victor Elementary School District",
			title: "Substitute Teacher",
			location: "Victorville, CA",
			dates: "2014 - 2017",
			description: "I worked at elementary schools in the district as a substitute teacher. I gave lessons, managed students, and performed other teacher-related responsibilities. The classrooms that I worked in ranged in grades from kindergarten to sixth grade, with about 20-30 students per class."
		},
		{
			employer: "elifet International Academy",
			title: "English Teacher",
			location: "Toyonaka, Osaka, Japan",
			dates: "2011 - 2014",
			description: "I taught conversational English to kids and adults. I worked with students ranging in ages from 5 to 60. I customized lesson plans based on students' English levels and goals. I also designed and implemented new courses."
		},
		{
			employer: "Alfie Language",
			title: "English Teacher",
			location: "Tokushima, Japan",
			dates: "2010 - 2011",
			description: "I taught conversational English to kids and adults. I worked with students ranging in ages from 2 to 74. I made lesson plans based on students' English levels. I used games, activities, and materials to make learning fun and interesting."
		}
	],
	display: function() {
		work.jobs.forEach(function(job) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);

			var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
			var formattedWorkDesc = HTMLworkDescription.replace("%data%", job.description);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkDesc);
		});	
	}
};

var projects = {
	projects: [
		{
			title: "World City Info Page",
			dates: "2017",
			description: "Created a world city info page as part of an embedded SQL class project.",
			images: ["images/world.png"]
		},
		{
			title: "GUI Tic-Tac-Toe",
			dates: "2017",
			description: "Created a GUI-based tic-tac-toe game using Java and the Swing toolkit as part of a class project.",
			images: ["images/ttt.png"]
		},
		{
			title: "Tournament Results",
			dates: "2017",
			description: "Created a program that connects a Python module to a PostgreSQL database for keeping track of players and matches in a Swiss-style tournament.",
			images: ["images/tournament.png"]
		},
		{
			title: "GUI Quiz Tutor",
			dates: "2017",
			description: "Created a program that implements a GUI-based multiple choice quiz using Java and the Swing toolkit as part of a class project.",
			images: ["images/quiz.png"]
		},
		{
			title: "Movie Website",
			dates: "2017",
			description: "Created a program that uses object-oriented Python to create a series of movie objects. These objects are then used to dynamically populate an HTML page with movies and related information.",
			images: ["images/movie.jpg"]
		},
		{
			title: "Lesson Notes Page",
			dates: "2017",
			description: "Created a basic HTML and CSS page to display lesson notes as part of an early project in the Udacity Intro to Programming Nanodegree.",
			images: ["images/notes.png"]
		}
	],
	display: function() {
		projects.projects.forEach(function(project) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjTitle = HTMLprojectTitle.replace("%data%", project.title);
			$(".project-entry:last").append(formattedProjTitle);

			var formattedProjDates = HTMLprojectDates.replace("%data%", project.dates);
			$(".project-entry:last").append(formattedProjDates);

			var formattedProjDesc = HTMLprojectDescription.replace("%data%", project.description);
			$(".project-entry:last").append(formattedProjDesc);

			for (var i = 0; i < project.images.length; i++) {
				var formattedProjImage = HTMLprojectImage.replace("%data%", project.images[i]);
				$(".project-entry:last").append(formattedProjImage);
			}
		});	
	}
};

var education = {
	schools: [ 
		{
			name: "Victor Valley College",
			location: "Victorville, CA",
			degree: "AS",
			majors: ["Computer Information Systems"],
			dates: "2016 - present",
			url: "http://www.vvc.edu"
		},
		{
			name: "California State University, San Bernardino",
			location: "San Bernardino, CA",
			degree: "BA",
			majors: ["Anthropology"],
			dates: "2010",
			url: "https://www.csusb.edu"
		}
	],
	onlineCourses: [
		{
			title: "Front-End Web Developer Nanodegree",
			school: "Udacity",
			dates: "In progress",
			url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			title: "Intro to Programming Nanodegree",
			school: "Udacity",
			dates: "2017",
			url: "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		}
	],
	display: function() {
		education.schools.forEach(function(school) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
			$(".education-entry:last").append(formattedSchoolDates);

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
			$(".education-entry:last").append(formattedSchoolLocation);

			for (var i = 0; i < school.majors.length; i++) {
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors[i]);
				$(".education-entry:last").append(formattedSchoolMajor);
			}
		});
		$("#education").append(HTMLonlineClasses);
		education.onlineCourses.forEach(function(program) {
			$("#education").append(HTMLschoolStart);

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", program.title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", program.school);
			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", program.dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace("%data%", program.url);
			$(".education-entry:last").append(formattedOnlineURL);
		});
	}
};

$("#main").append(internationalizeButton);
function inName() {
	var index = 0;
	while (bio.name[index] !== " ") {
		index++;
	}
	var firstName = bio.name[0].toUpperCase() + bio.name.slice(1, index).toLowerCase();
	var lastName = bio.name.slice(index).toUpperCase();

	return firstName + lastName;
}

bio.display();
work.display();
projects.display();
education.display();

// $("#mapDiv").append(googleMap);