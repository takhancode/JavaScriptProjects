const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
  if (aboutTabs) {
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

      const experiencecontent = experienceList
        .map((ele) => {
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
       
       `;
        })
        .join("");
      if (experiences) {
        experiences.forEach((ele) => {
          ele.innerHTML = experiencecontent;
        });
      }
    } else if (activeTab == "education") {
      const education = document.querySelector(".education-list");
      const educationlist = [
        {
          id: 1,
          date: "2020-2022",
          degree: "Matric",
          institution: "Seek School System",
        },
        {
          id: 2,
          date: "2022-2024",
          degree: "FSc Pre-Engineering",
          institution: "Govt. Islamia Civil Lines College Lahore",
        },
        {
          id: 3,
          date: "2024-Present",
          degree: "BS Computer Science",
          institution: "NUML Lahore",
        },
      ];
      const educationContent = educationlist
        .map((ele) => {
          return `
         <div class="experience-box" key=${ele?.id}>
              <h4>${ele?.date}</h4>
              <h3>${ele?.degree}</h3>
              <div class="company-name">
                <span></span>
                <p>${ele?.institution}</p>
              </div>
              <p>
                ${ele?.details}
              </p>
         </div>
        `;
        })
        .join("");
      if (education) {
        education.innerHTML = educationContent;
      }
    } else if (activeTab == "skills") {
      const skills = document.querySelector(".skill-list");
      const skillList = [
        {
          id: 1,
          name: "HTML - Hyper Text Markup Language",
          icon: "assets/html.png",
        },
        {
          id: 2,
          name: "CSS - Cascading Style Sheets",
          icon: "assets/css.png",
        },
        {
          id: 3,
          name: "JavaScript",
          icon: "assets/javascript.png",
        },
        {
          id: 4,
          name: "C++",
          icon: "assets/cpp.png",
        },
        {
          id: 5,
          name: "Python",
          icon: "assets/python.png",
        },
        {
          id: 6,
          name: "Git & GitHub",
          icon: "assets/github.png",
        },
      ];
      const skillContent=skillList.map((ele)=>{
         return`
            <div class="skill-box" key=${ele?.id}>
              <img src=${ele?.icon}
               alt=${ele?.name}
                title=${ele?.name}
                loading="lazy" />
          </div>
         
         `;
      }).join("");
      if(skills){
        skills.innerHTML=skillContent;
      }
    }
  });
});
