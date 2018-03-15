const data_work = {
  work: [
{   
  project_title: "Jim Granato",
  dates: "(2017-2018)",
  description_1: "Developed and built professional portfolio website for filmmaker Jim Granato.",
  tech_stack: "Express, Jade, Node, CSS, jQuery, Bootstrap",
  github: "https://github.com/dmcdekker/jimG",
  id: 8
}, 
{   
  project_title: "Stealth Start Up",
  dates: "(2018)",
  description_1: "Product Design/Consultation for startup in stealth mode: wireframes, use model, personas.",
  tech_stack: "Balsamiq",
  github: "n/a", 
  id: 7
}, 
{   
  project_title: "4Bells",
  dates: "(Dec 2016 - Aug, 2017)",
  description_1: "UX/UI redesign of First Responder app.",
  tech_stack: "React, HTML, CSS, Bootstrap",
  github: "https://github.com/dmcdekker/react_website",
  id: 6
}, 
{   
  project_title: "D. M. Dekker",
  dates: "(2017-2018)",
  description_1: "Designed, developed, and built personal website for self.",
  tech_stack: "React, HTML, CSS, Bootstrap",
  github: "https://github.com/dmcdekker/react_website",
  id: 5
}, 
{   
  project_title: "FindEatFood",
  dates: "(2017)",
  description_1: "Built and designed mobile app to find recipes based on ingredients.",
  tech_stack: "Android Studio, Java",
  github: "https://github.com/dmcdekker/FindEatFood",
  id: 4
}, 
{   
  project_title: "CitizensOrg",
  dates: "(2017)",
  description_1: "Designed and built website for web application to facilitate neighborhood political organizing",
  tech_stack: "MongoDB, Express, Angular, Node.js, Jade, CSS, jQuery, Javascript",
  github: "https://github.com/dmcdekker/citizensorg",
  id: 3
},
{
  project_title: "SrpoutWare",
  dates: "(2016)",
  description_1: "Designed and built website for toys.",
  tech_stack: "Axure, Wix, Balsamiq",
  gitHub: "",
  id: 2
},
{
  project_title: "SisterWeb",
  dates: "(2016)",
  description_1: "Designed and built website for mentorship of women in tech.",
  tech_stack: "Ruby on Rails, HAML, CSS.",
  gitHub: "https://github.com/dmcdekker/SisterWebLogin.1",
  id: 1
}

],
  all: function() { return this.work},
  get: function(id) {
    const isWork = p => p.link === id
    return this.work.find(isWork)
  }
}


export default data_work;




    
