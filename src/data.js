const data = {
  workcards: [
{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1504041011/jim_card2_dkl0op.png",
	name: "Jim Granato",
	type: "Web Development",
	link: "jimg",
	number: 8,
	project: "As an independent filmmaker, Jim wanted an updated, more modern looking site that presented his work using clean and organized design. He wanted to curate his best work on the website, so he could use it as an online professional resume. To give users, and potential customers, a more directed experience, I grouped his work by jQuery tags.",
	challenges: "For the portfolio, which is a lightbox, there was a problem with the embedded video content not closing completely; unfortunately, the sound would continue to play and the only way to stop it was to refresh the browser. After some research, I added some javascript to completely close the modal. Also with the modal, I couldn't figure out how to keep the focus on the menu items on the portfolio page; apparently it's a known problem with modals (it's also an accessibility issue).",
	tools: "Node.js, Express, Bootstrap, jQuery",
	result: "I'm happy with the final result, appearance, and functionality. My next goal is to make a template for the portfolio page, as there's way too much code in there (currently learning React!).",
	images: [
    	"./images/jim_home.png",
		"./images/jim_portfolio.png",
		"./images/jim_openmodal.png",
		"../images/jim_dtour.png"
    			],
	site: "http://www.jimgranato.com/"
},

{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1492138087/Screen_Shot_2017-04-13_at_3.45.21_PM_qpr2vu.png",
	name: "4Bells",
	type: "Product Dev/UX/UI Design",
	link: "4Bells",
	number: 7,
	project: "4Bells is a first responder mobile application from Caravan Studios. 4Bells matches volunteers with time-sensitive tasks, like delivering important documents, picking up a dog from the pound, or deploying volunteers after a disaster. It enables group leaders to connect easily with volunteers, create tasks, and monitor who has signed up to complete tasks. As the Product Developer intern, my job was to redesign the UI and improve app functionality. In addition, Caravan Studios wanted the app to incorporate web accessibility features. ",
	challenges: "Because the color palette was already established, working with accessibility guidelines for the first time was challenging. During the design process, I had to figure out how to keep the original colors while simultaneously allowing for sufficent contrast. Unfortunately, many of the colors had to change to meet WCAG guidelines; fortunately, the WCAG website has many wonderful tools that make selecting the right contrast easy. One of the ways I resolved not having to radically change the design was to put a box with a lighter color around text areas. Also, Adobe XD does not allow for global changes to color, so when a color needed to be changed, every item had to be changed.",
	tools: "Adobe XD, Axure.",
	result: "Something about the result",
	pageimg: [
		{ img1: "",
		  img2: "",
		  img3: "",
		  img4: ""
		}
		],
	site: ""	
}, 

{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1493701540/denise_website_ugrf8p.png",
	name: "dmdekker.io",
	type: "Web Development",
	link: "dmdekker",
	number: 6,
	project: "As an newbie developer on the verge of graduating, I made an online portfolio for my work using Ruby on Rails via Cloud 9, and deplying to Heroku for hosting. My website is hosted by Google Web Services. I like the clean aesthetic that Bootstrap delivers, which was in line with my desire to have a simple, yet elegant, website.",
	challenges: "While making the main static pages, there was a flickering (sometimes known as FOUC: Flash Of Unstyled Content) that was hard to troubleshoot. After poking around on Stackoverflow and trying many unsuccessful remedies, I found a solution that recommended removing Turbolinks from my Rails application. More information regarding Turbolinks can be found here. Formatting for mobile also presented challenges, but Bootstrap's responsive features made styling for multiple devices easy. Additionally, the maps page could be improved upon; the Leaflet map could run more efficiently, but I haven't yet been able to make the markers cluster work on Rails.",
	tools: "Ruby on Rails, CSS, HTML5, Cloud 9, Heroku, and Bootstrap.",
	result: "I'm happy with the final result; it conveys a good sense of my aesthetic and showcases my emerging developer sensibilities and skillset. Press the button below to connect to my GitHub repository for this project.",
	pageimgs : [
		"../images/jim_home.png",
		"../images/jim_portfolio.png",
		"../images/jim_openmodal.png",
		"../images/jim_dtour.png"
	],
	site: ""
},

{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1498604496/ingredients_landscape_wx38zd.jpg",
	name: "FindEatFood",
	type: "Android Development",
	link: "findeatfood",
	number: 5,
	project: "Each day, thousands of pounds of food are thrown in the garbage; in the U.S., between 30-40% of the overall food supply is estimated to be waste. FINDEATFOOD aims to mitigate this waste by encouraging users to search for recipes based on ingredients they may have at home, or to menu plan more cost-efficiently. Also, FINDEATFOOD finds recipes based on ingredients and dietary restrictions using HTTP requests to Yummly's API and users can save recipes as favorites.",
	challenges: "In addition to finding recipes, part of the original plan was to include a feature that could deals. Unfortunately, the API I wanted to use that facilitated finding deals was no longer giving out API keys, and the backup API did not yield any useful data, so this feature was ommitted from FINDEATFOOD. Also, I found the styling/formatting challenging; due to unfamiliarity, it was difficult to switch gears from web development to Android development and I found the experience frustrating at times, but it was a great learning experience. Click on the images to enlarge.",
	tools: "Android Studio.",
	result: "The overall appearance is fine; I would liked to have spent more time with Android front end design and produced a more polished product.",
	pageimg: [
		{ img1: "",
		  img2: "",
		  img3: "",
		  img4: ""
		}
		],
	site: ""	
},

{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1488914918/Screen_Shot_2017-03-06_at_3.35.48_PM_nfqmf0.png",
	name: "CitizensOrg",
	type: "Web Development",
	link: "citizensorg",
	number: 4,
	project: "A project for CS186 at Mills College, CitizensOrg is a web application that helps facilitates neighborhood political organizing. After the 2016 election, we wanted to create a tool that made political organizing easy; a platform where people could schedule meetings and share information. Users will be able to login and post/find actionable events. An additional feature enables users to look up their Congresspeople by zipcode. I was responsible for the front end and design and making the site responsive for mobile.",
	challenges: "Until this project, I had never used Jade in conjuntion with CSS, but found it to be easy to navigate. After experiencing FOUC with the user name, I used ng-cloak in the html element tag, which resolved the problem. Also, styling Angular in a project was new to me, as was formatting JSON items returned from an API query.",
	tools: "MongoDB, Express, Angular, Node.js, CSS, Jade, Cloud 9, Bootstrap, and Heroku, plus the Agile process to plan and develop our site.",
	result: "",
	pageimg: [
		{ img1: "../images/citizens_login.png",
		  img2: "../images/citizens_findcongress.png",
		  img3: "../images/citizens_post.png",
		  img4: "../images/citizens_upcoming.png"
		}
		],
	site: ""	
},

{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1471463441/Denise%20Website/use_model_jgk2as.jpg",
	name: "SproutWare",
	type: "UX Design",
	link: "sproutware",
	number: 3,
	project: "To develop a compelling ecommerce site that provides detailed, expert information to customers who want to purchase developmentally appropriate and educational toys for children [individuals] aged 0 to 99.",
	challenges: "In order to evaluate the potential success of our project, we examined the anatomy of the modern educational toy website and surveyed fifty-five potential users. Specifically, we were interested in people's motivation for purchasing toys online. According to our survey results, a high percentage of respondents still bought toys in brick and mortar stores, which gave us the green light to move forward. Respondents also told us what was important to them: customer reviews over expert recommendations, quick and easy checkout, and products ranked by customer recommendation. These responses formed the core of our process to create a user-friendly website. Based on the profiles of participants from the data collected, we created personas to understand the varying needs of potential customers. For example, the professional who wants to buy quality toys for her nephews and nieces, or the single mom who doesn't have time to shop, or grandparents who need hints. The personas kept us tied to user's needs and their level of facility with technology. Click on the images to enlarge.",
	tools: "Axure, Google Forms, Google draw-io, NinjaMock",
	result: "After analysing and refining the wireframes, we created a high fidelity prototype using Axure and Wix, which enabled us to produce a high-fidelity, realistic prototype for user testing. Of all the methods, the prototype and user testing generated the most feedback for improvements to our site; for example, most users found that when they were browsing inventory, product information and buy now buttons were indistinguishable from each other./n In addition to separating the buttons, we redesigned the page to make it easier for users to distinguish between the function of the buttons on the page by renaming them, changing the color, and placement. Also, users could click on a product’s image to view its details./n During prototype testing, when we instructed testers to add a review, participants said they would normally click a review link provided in email, so we added the additional step of sending an email to the user containing the purchase information and a prompt to add a review of their purchases. In addition, we added a review button on the order confirmation page. Our initial prototype had viewers leave a review on the product detail page, which required a log in, so the last iteration enabled the user to write a review by clicking a link in the email.",
	pageimg: [
		{ img1: "",
		  img2: "",
		  img3: "",
		  img4: ""
		}
		],
	site: ""
},

{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1471463497/Denise%20Website/home_ojfm0h.png",
	name: "SisterWeb",
	type: "Web Development",
	link: "sisterweb",
	number: 2,
	project: "SisterWeb was born from our groups' desire to have a platform where women in tech could interact, connect, and find support. For our final project, the goal was to produce a social website that users could log into and interact with each other using direct log in or third-party authentication. Using the Agile process, we implemented User Stories that centered around creating profiles, a calendar, and a way to create questions or comments that individual users could interact with.",
	challenges: "As the Front End Developer, each page was styled as it came in. There was no formal CSS/HTML instruction; I learned everything on the fly. About a month into the project, I realized that I hadn’t formatted Bootstrap correctly in the application file, so the entire site ended up being entirely hand coded. Also, for the allotted timeframe of a semester, we definitely bit off more that we had time to complete! In the beginning, we devised a much more complex site than we ended up producing. I additionally filled the role of Product Manager, keeping our team on track with its goals and documenting progress via Pivotal Tracker.",
	tools: "In addition to Ruby on Rails, CSS, HAML, Cloud 9, Pivotal Tracker, Piazza, and Heroku, we used the Agile process to plan and develop our site.",
	result: "Overall, the website turned out well with good functionality and we achieved all the goals outlined within our User Stories.",
	pageimg: [
		{ img1: "",
		  img2: "",
		  img3: "",
		  img4: ""
		}
		],
	site: ""	
},

{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1471463440/Denise%20Website/listen_typo_dxdlrg.jpg",
	name: "Typography",
	type: "Letterpress",
	link: "typography",
	number: 1,
	project: [
		{
			broadsheet: "Designed by Giambattista Bodoni in the late 18th century, the Bodoni typeface heralded a growing departure away from the flourishes of the Baroque period and into the Rococo period. Inspired by Pierre Didot, whose eponymous typeface exuded simplicity, Bodoni’s cleaner, mathematically precise Roman-style type materialized as “obsessively vertical” with starker contrasting. As the Age of Enlightenment progressed, logic, scientific reasoning and accuracy gained in popularity. New typeface design reflected changing aesthetics and the advent of Modern classification for typography. As a distinguished printer for royalty, Bodoni type was used primarily for books; Homer’s Iliad was one of Bodoni’s finished masterpieces. My broadsheet incorporated the stylistic leanings of Bodoni: clean execution for readability, variance in type size, some simple lines, and hierarchy using Bodoni Book typeface. The passage from Beatrice Warde’s essay about typography, The Crystal Goblet, was a fitting homage to the savant purism exhibited in Bodoni’s work.",
			img: ""
		},
		{
			broadsheet: "",
			img: ""
		}
		],
	challenges: "",
	tools: "",
	result: "",
	pageimg: [
		{ img1: "",
		  img2: "",
		  img3: "",
		  img4: ""
		}
		],
	site: ""	
}
],
  all: function() { return this.workcards},
  get: function(id) {
    const isWorkCard = p => p.link === id
    return this.workcards.find(isWorkCard)
  }
}

export default data;




    
