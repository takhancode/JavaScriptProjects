const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

  document.addEventListener('DOMContentLoaded',()=>{
   if(aboutTabs){
     aboutTabs[0].click();
  }
 });
aboutTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    aboutTabs.forEach((a) => {
      a.classList.remove("active");
    });
    tab.classList.add("active");
    console.log(tab);

    aboutContent.forEach((c) => {
      c.classList.remove("active");
    });
    const activeTab = tab.dataset.section;
    document.getElementById(activeTab).classList.add("active");

    if (activeTab == "experience") {
      const experiences = document.querySelectorAll(".experience-list");
      const experienceList = [
        {
          id: 1,
          date: "2025 - Present",
          position: "Computer Science Student",
          company: "NUML Lahore",
          details:
            "Building a strong foundation in programming, web development, data structures, and software engineering.",
        },
        {
          id: 2,
          date: "2024 - Present",
          position: "Self-Taught Web Developer",
          company: "Personal Projects",
          details:
            "Developing responsive websites and interactive web applications using HTML, CSS, JavaScript, and modern web technologies.",
        },
        {
          id: 3,
          date: "2025 - Present",
          position: "Software Development Learner",
          company: "Self Learning",
          details:
            "Practicing problem solving and building projects while learning JavaScript, Python, Git, and software development concepts.",
        },
      ];

      const experiencecontent=experienceList.map((ele)=>{
       return `
        <div class="experience-box" key=${ele?.id}>
              <h4>${ele?.date}</h4>
              <h3>${ele?.position}</h3>
              <div class="company-name">
                <span></span>
                <p>${ele?.company}</p>
              </div>
              <p>
                ${ele?.details}
              </p>
            </div>
       
       `
      }).join("");
      if(experiences){ 
    experiences.forEach((ele) => {
        ele.innerHTML = experiencecontent;
    });
   }
    }
  });
});
