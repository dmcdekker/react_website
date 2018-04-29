const data_work = {
  work: [
{   
  work_title: "Self-Employed Web Developer",
  company: "",
  location: "Oakland, CA",
  dates: "(Sept 2017 - current)",
  description_1: "Developed and built professional portfolio website for filmmaker Jim Granato.",
  description_2: "Various web projects (form HTTP request handling, Product Design/Consultation for startup in stealth mode (wireframe)).",
  tech_stack: "Tools: Adobe XD, Balsamiq, Axure",
  id: 2.003
},
{   
  work_title: "Product Developer",
  company: "Caravan Studios",
  location: "San Francisco, CA",
  dates: "(Dec 2016 - Aug 2017)",
  description_1: "Created new UI for 4Bells mobile app using Adobe XD.",
  description_2: "Developed new information hierarchy using UX principles/methodology.",
  description_3: "Integrated accessibility guidelines into app and design.",
  description_4: "Tested resulting designs with target demographic.",
  description_5: "Collated feedback from testing and integrated into second iteration.",
  tech_stack: "Tools: Adobe XD, Balsamiq, Axure",
  id: 2.002
},
{   
  work_title: "Purchaser",
  company: "Veritable Vegetable Inc",
  location: "San Francisco, CA",
  dates: "(April 2004 - Aug 2013)",
  description_1: "Purchased extensive line of organic, fresh produce.",
  description_2: "Reduced warehouse workload by streamlining receiving of prebuilt orders.",
  description_3: "Managed grower relationships, logistical deadlines, inventory and quality for product line.",
  description_4: "Co-directed Farm and Field Program.",
  description_5: "Increased banana sales fourfold after introducing color categories for ripeness.",
  id: 2.001
}


],
  all: function() { return this.work},
  get: function(id) {
    const isWork = p => p.link === id
    return this.work.find(isWork)
  }
}


export default data_work;




    
