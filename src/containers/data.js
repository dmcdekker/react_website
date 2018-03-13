const data = {
  workcards: [
{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_430,w_648/v1520978395/stitcher_icon_eeyt9a.jpg",
	name: "Stitcher Feature",
	type: "Adding A Social Feature to Stitcher",
	link: "stitcher",
	number: 9,
	project: "",
	challenges: "Stitcher (as of the time this project was completed) had a buried social feature for sharing podcasts; my assignment was to improve upon this feature.", 
	process1: "Assumptions: Revenue from subscriptions and ads is not a driving factor; new feature cost and implementation should be minimal; 'my Thumbs up' data (existing feature) is collected and stored; feature is for mobile platform. Goals of Feature: To test assumption of PM that user-to-user interaction improves overall experience; to improve social aspect of app; measure user engagement in app with improved social component.",
	process2: "Based on a user profile, My idea was to add a menu item called 'Recommended' in navigation drawer; when friends Thumbs Up podcast, podcast items are added in reverse chronological order and a notification is sent to friends (plus addition of pop up to communicate change to function of Thumbs Up button that shows once). This adds an immediate visual cue when there are notifications, improves usability; brings social aspect of up a level in navigation hierarchy, adds to existing infrastructure without redesign of entire app, and utilizes data (Thumbs Up) already being collected.",
	process3: "Alternative ideas: Overhaul home/landing page: remove drawer and add navigation bar at the foot of the screen; send notification when friends Thumbs Up podcast; add notification in Friends Activity when friends Thumbs Up podcast; in Friends & Profile menu item add Recommended tab (alongside my Activity and Friends Activity tabs); add podcast items in reverse chronological order and send notification to friends.",
	tools: "Axure",
	result: "",
	pageimg6:[],
	pageimg4:[
		"../images/stitcher_1.png",
		"../images/stitcher_3.png",
		"../images/stitcher_2.png",	
		],	
	site: "https://zrkhja.axshare.com/home.html",
	id: 8
},  	
{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1504041011/jim_card2_dkl0op.png",
	name: "Jim Granato",
	type: "Web Development",
	link: "jimg",
	number: 8,
	project: "As an independent filmmaker, Jim wanted an updated, more modern looking site that presented his work using clean and organized design. He wanted to curate his best work on the website, so he could use it as an online professional resume. To give users, and potential customers, a more directed experience, I grouped his work by jQuery tags.",
	challenges: "For the portfolio, which is a lightbox, there was a problem with the embedded video content not closing completely; unfortunately, the sound would continue to play and the only way to stop it was to refresh the browser. After some research, I added some javascript to completely close the modal. Also with the modal, I couldn't figure out how to keep the focus on the menu items on the portfolio page; apparently it's a known problem with modals (it's also an accessibility issue).",
	process1: "After consulting with Jim and looking at other filmmaker's sites, we came up with a clean, easily navigable UI to showcase his work; a combination of jQuery and Bootstrap made this easy to achieve.",
	process2: "",
	process3: "",
	tools: "Node.js, Express, Bootstrap, jQuery",
	result: "I'm happy so far with the result, appearance, and functionality. We worked to get a MVP up (so Jim could have something to show prospective clients) and I'm currently working on making a template for the portfolio page, plus adding a blog and CMS so Jim can update the site on his own.",
	pageimg6:
		[
		"../images/jim_home.png",
		 "../images/jim_portfolio.png",
		 "../images/jim_openmodal.png",
		"../images/jim_dtour.png"
		],
	pageimg4:[],	
	site: "http://www.jimgranato.com/",
	id: 7
},

{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1492138087/Screen_Shot_2017-04-13_at_3.45.21_PM_qpr2vu.png",
	name: "4Bells",
	type: "Product Dev/UX/UI Design",
	link: "4Bells",
	number: 7,
	project: "4Bells is a first responder mobile application from Caravan Studios. 4Bells matches volunteers with time-sensitive tasks, like delivering important documents, picking up a dog from the pound, or deploying volunteers after a disaster. It enables group leaders to connect easily with volunteers, create tasks, and monitor who has signed up to complete tasks. As the Product Developer intern, my job was to redesign the UI and improve app functionality. In addition, Caravan Studios wanted the app to incorporate web accessibility features without changing the back end. ",
	challenges: "Because the color palette was already established, working with accessibility guidelines for the first time was challenging. During the design process, I had to figure out how to keep the original colors while simultaneously allowing for sufficent contrast. Unfortunately, many of the colors had to change to meet WCAG guidelines; fortunately, the WCAG website has many wonderful tools that make selecting the right contrast easy. One of the ways I resolved not having to radically change the design was to put a box with a lighter color around text areas. Also, Adobe XD does not allow for global changes to color, so when a color needed to be changed, every item had to be changed.",
	tools: "Adobe XD, Axure.",
	process1: "Before proceeding with the UI redesign, I formulated personas based on (not data-based) demographic, needs, and goals of current users. For each persona, I designed their needs, goals, and motivations around a senior dog rescue organization and tried to capture traits that were specific and yet general enough to encapsulate all 4Bells user traits. Specifically, I designed personas that reflected the demographic who might experience the most difficulty with the app: a senior, a person with accessibility needs, and a user inexperienced with technology. I began with personas and use models to ensure that I thoroughly understood the app, its capabilities, and audience. Because Caravan wanted the app to meet Web Accessibility standards, I read and studied material online and found the BBC guidelines for mobile application development the most comprehensive and helpful.",
	process2: "Next, I evaluated 4Bells using heuristics and accessibility recommendations and pinpointed the components that needed to change, including: button placement and color, button color changes to indicate state change, ability to click through items and not only swipe, contrast between foreground and background, simple prompts, visual hint of orientation, direction through funneling, help menu, separation of screens, intuitive top-level information hierarchy, clearer delineation of routes to action, logical sequence of events/tab order, not allow user to navigate away while mid-task.  ",
	process3: "In order to convey the feeling of a beginning, middle, and end, I propose clearer delineation of the tabs, with with tabs that change color to reflect orientation (this was repeated throughout the app for consistency), with tabbing in addition to swiping. Swiping is not a preferred feature for accessibility, as it can be rendered inoperable by assistive technology.  The redesigned screen view can be seen below (old on top and new on bottom).",
	result: "After recruiting some target users to test my designs, I incorporated further changes to complete the first design iteration. Given the scope of this project, I recommend clicking the link below to read the formal design document, which contains more indepth information.",
	pageimg6: [
		],
	pageimg4:[
		"../images/4bells_old1.png",
		"../images/4bells_old2.png",
		"../images/4bells_old3.png",
		"../images/4bells_new1.png",
		"../images/4bells_new2.png",
		"../images/4bells_new3.png",
	
		],		
	site: "https://docs.google.com/document/d/1DQ9gjJpd58RiUJH0he5hSAQ9GCVzVSUD7mGj5SytHhs/edit?usp=sharing",
	id: 6	
}, 

{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1493701540/denise_website_ugrf8p.png",
	name: "dmdekker.io",
	type: "Web Development",
	link: "dmdekker",
	number: 6,
	project: "As an newbie developer on the verge of graduating, I originally made an online portfolio for my work using Ruby on Rails via Cloud 9, and deplying to Heroku for hosting. My website is hosted by Google Web Services. I like the clean aesthetic that Bootstrap delivers, which was in line with my desire to have a simple, yet elegant, website. In October 2017, I decided to teach myself React and redoing my website seemed like a great place to start!",
	challenges: "While making the main static pages, there was a flickering (sometimes known as FOUC: Flash Of Unstyled Content) that was hard to troubleshoot. After poking around on Stackoverflow and trying many unsuccessful remedies, I found a solution that recommended removing Turbolinks from my Rails application. More information regarding Turbolinks can be found here. Formatting for mobile also presented challenges, but Bootstrap's responsive features made styling for multiple devices easy. Additionally, the maps page could be improved upon; the Leaflet map could run more efficiently, but I haven't yet been able to make the markers cluster work on Rails.",
	process1: "I decided to teach myself React and redesigned my site at the beginning of 2018. I learned quickly that React was not ideal for my purposes, as I wanted more variance with individual pages, but I learned a lot!",
	process2: "",
	process3: "",
	tools: "React, CSS, HTML5, Cloud 9, Heroku, and Bootstrap.",
	result: "I'm happy with the final result; it conveys a good sense of my aesthetic and showcases my emerging developer sensibilities and skillset. Press the button below to connect to my GitHub repository for this project.",
	pageimg6: [
		
		],
	pageimg4:[],	
	site: "http://www.dmdekker.io/",
	id: 5
},

{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1488914918/Screen_Shot_2017-03-06_at_3.35.48_PM_nfqmf0.png",
	name: "CitizensOrg",
	type: "Web Development",
	link: "citizensorg",
	number: 4,
	project: "A project for CS186 at Mills College, CitizensOrg is a web application that helps facilitates neighborhood political organizing. After the 2016 election, we wanted to create a tool that made political organizing easy; a platform where people could schedule meetings and share information. Users will be able to login and post/find actionable events. An additional feature enables users to look up their Congresspeople by zipcode. I was responsible for the front end and design and making the site responsive for mobile.",
	challenges: "Until this project, I had never used Jade in conjuntion with CSS, but found it to be easy to navigate. My challenges with the front end mostly occurred with Flash of Unstyled Content (FOUC), which apparently is common with Angular. Fortunately, there was some documentation in the Angular library (link here), which advised using the ng-cloak tag. It worked, but took me a few attempts to realize that the tag should go on the HTML element. Without the tag, our login button on the navigation bar kept flashing to show the {{username}} Angular component. Also, working with the dashboard scrolling was challenging; the surrounding elements wanted to scroll too. I had to play around with different settings for the overflow and differentiate between mobile and full-screen views to make it work. Some of the UI is still a little funky on the iPad viewport. ",
	process1: "The architecture of CitizensOrg is a typical Express application; the actions shown in the dashboard and the users are models that are stored in the database. The front end is comprised of HTML/CSS/Bootstrap. Furthermore, the Find Your Congressperson feature is implemented through querying the Sunlight Congress API which returns a JSON payload based off the zipcode sent to the API.",
	process2: "",
	process3: "",
	tools: "MongoDB, Express, Angular, Node.js, CSS, Jade, Cloud 9, Bootstrap, and Heroku, plus the Agile process to plan and develop our site.",
	result: "Simple, clean, and functional! Given the current political climate, I wish that I had more time to develop this app more fully.",
	pageimg6: [
		"../images/citizens_login.png",
		"../images/citizens_findcongress.png",
		"../images/citizens_post.png",
		"../images/citizens_upcoming.png",
		],
	pageimg4:[],
	site: "",
	id: 4	
},

{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1498604496/ingredients_landscape_wx38zd.jpg",
	name: "FindEatFood",
	type: "Android Development",
	link: "findeatfood",
	number: 5,
	project: "Each day, thousands of pounds of food are thrown in the garbage; in the U.S., between 30-40% of the overall food supply is estimated to be waste. FINDEATFOOD aims to mitigate this waste by encouraging users to search for recipes based on ingredients they may have at home, or to menu plan more cost-efficiently. Also, FINDEATFOOD finds recipes based on ingredients and dietary restrictions using HTTP requests to Yummly's API and users can save recipes as favorites.",
	challenges: "In addition to finding recipes, part of the original plan was to include a feature that could deals. Unfortunately, the API I wanted to use that facilitated finding deals was no longer giving out API keys, and the backup API did not yield any useful data, so this feature was ommitted from FINDEATFOOD. Also, I found the styling/formatting challenging; due to unfamiliarity, it was difficult to switch gears from web development to Android development and I found the experience frustrating at times, but it was a great learning experience. Click on the images to enlarge.",
	process1: "Using the Yummly API, FindEatFood includes a SQLite database to store names of favorite recipes and recipe_ids (the id associated with the recipe in Yummly). A table named 'favorite_recipes' was created and is populated when the user ‘stars’ a recipe. This table contains the name of the recipe and the id of the recipe. When the user decides for the recipe to be a favorite by starring it, the name of the recipe and the id for the recipe (in accordance to Yummly) are saved in the database.", 
	process2: "",
	process3: "",
	tools: "Android Studio.",
	result: "The overall appearance is fine; I would liked to have spent more time with Android front end design and produced a more polished product. Clicking the link at the bottom of the page will connect you to the design document.",
	pageimg6: [
		  "../images/fef_home_closed.png",
		  "../images/fef_home_open.png",
		  "../images/fef_recipe_search.png",
		  "../images/fef_returned_recipes.png",
		  "../images/fef_recipe_details.png",
		  "../images/fef_recipe_link.png"
		],
	pageimg4:[],	
	site: "https://docs.google.com/document/d/1CnLIujF6C1yfO51E0_8yWKwo4Gv2Z6WhusfCujLmW4c/edit?usp=sharing",
	id: 3	
},


{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1471463441/Denise%20Website/use_model_jgk2as.jpg",
	name: "SproutWare",
	type: "UX Design",
	link: "sproutware",
	number: 3,
	project: "To develop a compelling ecommerce site that provides detailed, expert information to customers who want to purchase developmentally appropriate and educational toys for children [individuals] aged 0 to 99.",
	challenges: "Difficulty in finding tools that fit our criteria for making prototypes and wireframes (free and high quality!); I finally got a free student account from Axure. In UX/UI, there are no hard and fast rules, which can be frustrating when you're learning/doing something for the first time.",
	process1: "In order to evaluate the potential success of our project, we examined the anatomy of the modern educational toy website and surveyed fifty-five potential users. Specifically, we were interested in people's motivation for purchasing toys online. ",
	process2: "According to our survey results, a high percentage of respondents still bought toys in brick and mortar stores, which gave us the green light to move forward. Respondents also told us what was important to them: customer reviews over expert recommendations, quick and easy checkout, and products ranked by customer recommendation. These responses formed the core of our process to create a user-friendly website. Based on the profiles of participants from the data collected, we created personas to understand the varying needs of potential customers. For example, the professional who wants to buy quality toys for her nephews and nieces, or the single mom who doesn't have time to shop, or grandparents who need hints. The personas kept us tied to user's needs and their level of facility with technology.",
	process3: "",
	tools: "Axure, Google Forms, Google draw-io, NinjaMock",
	result: "After analysing and refining  wireframes, we created a high fidelity prototype using Axure and Wix, which enabled us to produce a high-fidelity, realistic prototype for user testing. Of all the methods, the prototype and user testing generated the most feedback for improvements to our site; for example, most users found that when they were browsing inventory, product information and buy now buttons were indistinguishable from each other. In addition to separating the buttons, we redesigned the page to make it easier for users to distinguish between the function of the buttons on the page by renaming them, changing the color, and placement. Also, users could click on a product’s image to view its details. During prototype testing, when we instructed testers to add a review, participants said they would normally click a review link provided in email, so we added the additional step of sending an email to the user containing the purchase information and a prompt to add a review of their purchases. In addition, we added a review button on the order confirmation page. Our initial prototype had viewers leave a review on the product detail page, which required a log in, so the last iteration enabled the user to write a review by clicking a link in the email.",
	pageimg6: [
		  "../images/sproutware1.jpg",
		  "../images/sproutware2.jpg",
		  "../images/sproutware4.jpg",
		  "../images/sproutware3.jpg"
		],
	pageimg4:[],	
	site: "",
	id: 2
},

{
	img: "https://res.cloudinary.com/dmcdekker/image/upload/c_scale,h_432,w_648/v1471463497/Denise%20Website/home_ojfm0h.png",
	name: "SisterWeb",
	type: "Web Development",
	link: "sisterweb",
	number: 2,
	project: "This was my first web programming project! SisterWeb was born from our groups' desire to have a platform where women in tech could interact, connect, and find support. For our final project, the goal was to produce a social website that users could log into and interact with each other using direct log in or third-party authentication. Using the Agile process, we implemented User Stories that centered around creating profiles, a calendar, and a way to create questions or comments that individual users could interact with.",
	challenges: "As the Front End Developer, each page was styled as it came in. There was no formal CSS/HTML instruction; I learned everything on the fly. About a month into the project, I realized that I hadn’t formatted Bootstrap correctly in the application file, so the entire site ended up being entirely hand coded. Also, for the allotted timeframe of a semester, we definitely bit off more that we had time to complete! In the beginning, we devised a much more complex site than we ended up producing. I additionally filled the role of Product Manager, keeping our team on track with its goals and documenting progress via Pivotal Tracker.",
	process1: "Using the Agile process, we developed user stories and used Pivotal Tracker to plan and develop our site. An example of one of our stories: As a female software engineer, so that I can find women in technology, I want a website that connects me to other women in tech.",
	process2: "",
	process3: "",
	tools: "Ruby on Rails, CSS, HAML, Cloud 9, Pivotal Tracker, Piazza, and Heroku.",
	result: "Overall, the website turned out well with good functionality and we achieved all the goals outlined within our User Stories.",
	pageimg6: [
		"../images/sisterweb2.png",
		"../images/sisterweb1.png"
		],
	pageimg4: [],
	site: "https://young-reef-29553.herokuapp.com/staticpages/home",
	id: 1	
}
],
  all: function() { return this.workcards},
  get: function(id) {
    const isWorkCard = p => p.link === id
    return this.workcards.find(isWorkCard)
  }
}


export default data;




    
