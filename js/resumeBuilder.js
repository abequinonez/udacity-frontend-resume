/*
The following four objects contain the resume information. Each
object also contains a display function for appending the information
to the page.
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
	welcomeMessage: "Welcome to my online resume! Here you'll find a history of my work, projects, and education.",
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

			var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedWorkDesc = HTMLworkDescription.replace("%data%", job.description);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDesc);
		});
	}
};

var projects = {
	projects: [
		{
			title: "Portfolio",
			dates: "2017",
			description: "Created a portfolio as part of the Udacity Front-End Web Developer Nanodegree Program. The project guidelines called for a responsive portfolio site incorporating a grid system. The site was built using HTML, CSS, and Bootstrap. Additional resources include jQuery (required for the Bootstrap navbar), Picturefill (responsive image polyfill for browsers without picture element support), and Font Awesome (social media icons).",
			images: ["images/portfolio.png"]
		},
		{
			title: "World City Info Page",
			dates: "2017",
			description: "Created a world city info page as part of an embedded SQL class project. The page was built using a combination of HTML, CSS, Bootstrap, PHP, and SQL. The PHP code does most of the work, since it communicates with a MySQL database to display a list of options, retrieve the user's selection from the database, and then dynamically create HTML to present the requested information.",
			images: ["images/world.png"]
		},
		{
			title: "GUI Tic-Tac-Toe",
			dates: "2017",
			description: "Created a GUI-based tic-tac-toe game using Java and the Swing toolkit as part of a class project. The game board and other various components are created using Swing objects (JFrame, JPanel, JButton, etc.). Players, X and O, take turns making moves by clicking on empty squares. If the square is available, it will be filled with the mark of the current player. After each successful move, the program will check if the game is over or has been tied. If the game is won or tied, a button for starting a new game will become available.",
			images: ["images/ttt.png"]
		},
		{
			title: "Tournament Results",
			dates: "2017",
			description: "Created a program that connects a Python module to a PostgreSQL database for keeping track of players and matches in a Swiss-style tournament. Part of the project guidelines called for a number of SQL queries to efficiently report the results of the tournament and determine the winner. As part of the program, a test is run to determine whether or not the Python module can successfully interact with the database.",
			images: ["images/tournament.png"]
		},
		{
			title: "GUI Quiz Tutor",
			dates: "2017",
			description: "Created a program that implements a GUI-based multiple choice quiz using Java and the Swing toolkit as part of a class project. The program asks the user to select from two user types, student and supervisor. As a student, the user can take a quiz and save their score. As a supervisor, the user can add questions and view scores.",
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

// This function appends the Google map to the page
function appendMap() {
	$("#mapDiv").append(googleMap);
}

bio.display();
work.display();
projects.display();
education.display();
appendMap();

// I've disabled the internationalize button for now
// $("#main").append(internationalizeButton);
// function inName() {
// 	var index = 0;
// 	while (bio.name[index] !== " ") {
// 		index++;
// 	}
// 	var firstName = bio.name[0].toUpperCase() + bio.name.slice(1, index).toLowerCase();
// 	var lastName = bio.name.slice(index).toUpperCase();

// 	return firstName + lastName;
// }