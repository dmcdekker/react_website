const data_school = {
  school: [
{ 
    school_name: "Hackbright Academy",
    location: "San Francisco",
    dates: "April - June 2018",
    certificate: "Software Engineering Program",
    description_1: "Accelerated, 12-week, software engineering program for women.",
    id: 3.002
},
{ 
    school_name: "Mills College",
    location: "Oakland",
    dates: "Jan 2015 - May 2017",
    certificate: "Bachelor of Arts, Computer Science",
    id: 3.001
}
],
  all: function() { return this.school},
  get: function(id) {
    const isSchool = p => p.link === id
    return this.school.find(isSchool)
  }
}


export default data_school;
