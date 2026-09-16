const projectList = [
  {
    id: 1,
    number: "01",
    title: "Todo App",
    description:
      "A simple task management app where users can add, edit, delete, and filter tasks.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "assets/todo.png",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    number: "02",
    title: "Weather App",
    description:
      "A weather application that fetches and displays weather information for a searched city using an API.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    image: "assets/weather.png",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    number: "03",
    title: "Price Range Slider",
    description:
      "An interactive price range slider that allows users to select and display a minimum and maximum price.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "assets/price-range.png",
    liveLink: "#",
    githubLink: "#",
  },
];

const projects = document.querySelector(".projects");
console.log(projects);

let currentIndex = 0;

const renderProject = (index) => {
  const projectContent = projectList[index];

  const previousDisabled = currentIndex === 0;
  const nextDisabled = currentIndex === projectList.length - 1;

  projects.innerHTML = `
    <div class="project-info">

      <h3>${projectContent?.number}</h3>

      <h4>${projectContent?.title}</h4>

      <p>
        ${projectContent?.description}
      </p>

      <div class="tech-stack">
        ${projectContent?.techStack
          ?.map((tech, i) => {
            return `
              <span key=${i}>${tech}</span>
            `;
          })
          .join("")}
      </div>

      <hr>

      <div class="links">
        <a href="${projectContent?.liveLink}">
          <i class="ph ph-arrow-right"></i>
        </a>

        <a href="${projectContent?.githubLink}">
          <i class="ph ph-github-logo"></i>
        </a>
      </div>

    </div>

    <div class="carousel">

      <img 
        src="${projectContent?.image}" 
        alt="${projectContent?.title}"
      >

      <div class="arrow">

        <a 
          href="#" 
          id="previous"
          class="${previousDisabled ? "disabled-btn" : ""}"
        >
          <i class="ph ph-caret-left"></i>
        </a>

        <a 
          href="#" 
          id="next"
          class="${nextDisabled ? "disabled-btn" : ""}"
        >
          <i class="ph ph-caret-right"></i>
        </a>

      </div>

    </div>
  `;

  document.getElementById("previous").addEventListener("click",(e)=>{
    e.preventDefault();

    if(currentIndex>0){
        currentIndex--;
        renderProject(currentIndex);
    }
  });


  
  document.getElementById("next").addEventListener("click",(e)=>{
    e.preventDefault();

    if(currentIndex<projectList.length-1){
        currentIndex++;
        renderProject(currentIndex);
    }
  });

};

  renderProject(currentIndex);