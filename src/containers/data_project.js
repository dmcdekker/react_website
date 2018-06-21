const data_project = {
  project: [
{   
  project_title: "Shero",
  dates: "(2018)",
  description_1: "Developed and built Mentoring Site for Women Engineers",
  description_2: "",
  tech_stack: "Flask, Python, Jinja, Bootstrap, PostgreSQL, SQLAlchemy, jQuery, Faker",
  github: "https://github.com/dmcdekker/hb_project", 
  id: 4.008
}, 
{   
  project_title: "Jim Granato",
  dates: "(2017 - 2018)",
  description_1: "Developed and built professional portfolio website for filmmaker Jim Granato.",
  description_2: "",
  tech_stack: "Node.js, Express, Jade",
  github: "https://github.com/dmcdekker/jimG", 
  id: 4.007
}, 
{   
  project_title: "Stealth Start Up",
  dates: "(2018)",
  description_1: "Product Design/Consultation for startup in stealth mode (wireframe).",
  description_2: "",
  tech_stack: "Balsamiq",
  github: "n/a", 
  id: 4.006
}, 
{   
  project_title: "D. M. Dekker",
  dates: "(2017 - 2018)",
  description_1: "Designed, developed, and built personal website for self.",
  description_2: "",
  tech_stack: "React, HTML, CSS, Bootstrap",
  github: "https://github.com/dmcdekker/react_website",
  id: 4.005
}, 
{   
  project_title: "FindEatFood",
  dates: "(2017)",
  description_1: "Built and designed mobile app to find recipes based on ingredients.",
  description_2: "",
  tech_stack: "Android Studio, Java",
  github: "https://github.com/dmcdekker/FindEatFood",
  id: 4.004
}, 
{   
  project_title: "CitizensOrg",
  dates: "(2017)",
  description_1: "Designed and built website for web application to facilitate neighborhood political organizing.",
  description_2: "",
  tech_stack: "MongoDB, Express, Angular, Node.js, Jade, CSS, jQuery, Javascript",
  github: "https://github.com/dmcdekker/citizensorg",
  id: 4.003
},
{
  project_title: "SproutWare",
  dates: "(2016)",
  description_1: "Researched, designed, and built website to sell smart toys using UX methodologies/priciples.",
  description_2: "",
  tech_stack: "Axure, Wix, Balsamiq",
  gitHub: "",
  id: 4.002
},
{
  project_title: "SisterWeb",
  dates: "(2016)",
  description_1: "Conceived, designed, and built website for mentorship of women in tech.",
  description_2: "",
  tech_stack: "Ruby on Rails, HAML, CSS.",
  gitHub: "https://github.com/dmcdekker/SisterWebLogin.1",
  id: 4.001
}
],
  all: function() { return this.project},
  get: function(id) {
    const isProject = p => p.link === id
    return this.project.find(isProject)
  }
}


export default data_project;
