const data_work = {
  work: [
{   
  title: "Jim Granato",
  description: "Developed and built professional portfolio website for filmmaker Jim Granato.",
  tech_stack: "Express, Jade, Node, CSS, jQuery, Bootstrap",
  github: "https://github.com/dmcdekker/jimG",
  id: 7
}, 
{   
  title: "Stealth Start Up",
  description: "Product Design/Consultation for startup in stealth mode: wireframes, use model, personas.",
  tech_stack: "Balsamiq",
  github: "n/a", 
  id: 6
}, 
{   
  title: "4Bells",
  description: "UX/UI redesign of First Responder app.",
  tech_stack: "React, HTML, CSS, Bootstrap",
  github: "https://github.com/dmcdekker/react_website",
  id: 5
}, 
{   
  title: "D. M. Dekker",
  description: "Designed, developed, and built personal website for self.",
  tech_stack: "React, HTML, CSS, Bootstrap",
  github: "https://github.com/dmcdekker/react_website",
  id: 4
}, 
{   
  title: "FindEatFood",
  description: "Built and designed mobile app to find recipes based on ingredients.",
  tech_stack: "Android Studio, Java",
  github: "https://github.com/dmcdekker/FindEatFood",
  id: 3
}, 
{   
  title: "CitizensOrg",
  description: "Designed and built website for web application to facilitate neighborhood political organizing",
  tech_stack: "MongoDB, Express, Angular, Node.js, Jade, CSS, jQuery, Javascript",
  github: "https://github.com/dmcdekker/citizensorg",
  id: 2
}, 
{
  title: "SisterWeb",
  description: "Designed and built  website for mentorship of women in tech.",
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




    
