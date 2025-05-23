class project {  
  constructor(img, bgColor, title, link, git, description, cred, techStack) {
    this.img = img;
    this.bgColor = bgColor;
    this.title = title;
    this.link = link;
    this.git = git;
    this.description = description;
    this.cred = cred;
    this.techStack = techStack;
  };
}

const HH = new project(
  "./assets/images/HobbyHuddleLogo.svg",
  "#76bdab",
  "Hobby Huddle",
  "https://hobbyhuddle.netlify.app/",
  "https://github.com/Reizor-75/hobby-huddle-front-end",
  "Hobby Huddle is a MERN Stack App that develops community bonds through a mutual love of hobbies. Hobby Huddle provides a centralized hub where individuals seeking to learn new skills can easily find and engage with experienced mentors who tailor to their interests. Simultaneously, it offers teachers a space to showcase their talents and host sessions, while enabling vendors to promote their venues for workshops.",
  ["Guest@guest.com" , "Guest"],
  ["React", "MongoDB", "Node.js", "Javascript", "HTML/CSS"]
);

const Shelved = new project(
  "./assets/images/Shelved_Logo_V5.svg",
  "#d9c1b4",
  "Shelved",
  "https://Shelved.netlify.app/",
  "https://github.com/Reizor-75/Shelved-front-end",
  "Shelved is a MERN Stack React App focused on sharing of opinions on literature amongst its users using Open Library API to populate the app with a catalog of existing book data. Users can look up books available on open library, search through the existing book catalog Shelved users have already shown interest in, leave reviews, save books into multiple lists to share with amongst friends made on the site.",
  ["Guest@guest.com" , "Guest"],
  ["React", "MongoDB", "Node.js", "Javascript", "HTML/CSS"]
)

const Shinshi = new project(
  "./assets/images/ChubbyPigeon.svg",
  "#cfe7c7",
  "Shinshi",
  "https://shinshi.fly.dev/",
  "https://github.com/Reizor-75/Shinshi",
  "Shinshi is a MEN Stack App that hosts detailed information about different anime to its community using Jikan API and a built in admin feature to populate the app's Anime data. Shinshi borrows its name from the Japanese word for \' divine\' or 神使. In Japanese mythology, a shinshi can be any animal and they are used \"to transmit divine will or to bear oracles\" from Japanese Gods. Shinshi's pigeon mascot is meant to bring information and reviews about anime to its users.",
  [],
  ["Express", "MongoDB", "Node.js", "Javascript", "HTML/CSS"]
)

const Noted = new project(
  "./assets/images/noted-favi.png",
  "#68c5f8",
  "Noted",
  "https://Noted-ml.fly.dev/",
  "https://github.com/Reizor-75/Noted",
  "Noted is a PERN Stack Django app where users can keep information organized using the Cornell Notes System. Noted lets you sorts your notes by subjects to allow easy navigation to specific notes, and allows you to edit or delete them when no longer in use. Meant to mimic a school like aesthetic, Noted takes design influence from note cards, graphic paper and the classic Cornell Note layout while allowing it's users to custom the look with interchangeable handwritten style fonts and color selection. Noted is designed primarily for tablet and mobile use but is also available for desktop usage.",
  ["Guest","password123!"],
  ["Django", "Python", "Postgres", "HTML/CSS"]
)

const Retro = new project(
  "./assets/images/Mine.png",
  "#aaa",
  "RetroSweeper",
  "https://michellelinares-minesweeper.netlify.app/",
  "https://github.com/Reizor-75/Minesweeper",
  "Retrosweeper is a browser based recreation of the Windows 98 Minesweeper game. RetroSweeper uses recursive methods to populate the board with mines, track mine locations, and expose the board appropriately when tiles are revealed.",
  [],
  ["Javascript", "HTML/CSS"]
)

addProjects([HH, Shelved, Shinshi, Noted, Retro])

function addProjects(projects){
  const projectsCotnainer = document.getElementById("projects");

  // projectsCotnainer.appendChild(createDropDown());

  for(let i = 0; i < projects.length; i++){
    projectsCotnainer.appendChild(createProject(projects[i]));
  }
}

function createDropDown(){
  const dropDown = document.createElement("div");
  dropDown.className = "dropdown"

  const dropBtn = document.createElement("button");
  dropBtn.className = "dropbtn" 
  dropBtn.innerHTML = "TechStack"
  dropBtn.onclick = function(){  document.getElementById("tSDropdown").classList.toggle("show") }
  dropDown.appendChild(dropBtn);

  const content = document.createElement("div");
  content.className = "dropdown-content"
  content.id = "tSDropdown"

  const js = document.createElement("div");
  js.className = "JS"
  js.innerHTML = "JavaScript"
  content.appendChild(js)  
  
  const java = document.createElement("div");
  java.className = "Java"
  java.innerHTML = "Java"
  content.appendChild(java)
  
  const python = document.createElement("div");  
  python.className = "Python"
  python.innerHTML = "Python"
  content.appendChild(python)

  dropDown.appendChild(content)  
  return dropDown
}

function createProject(project){
  const container = document.createElement("div");
  container.className = "project"

  const image = document.createElement("img");
  image.className = "project-image" 
  image.src = project.img
  image.alt = `${project.title} Logo`
  image.style.background = project.bgColor;
  container.appendChild(image);

  const content = document.createElement("div");
  content.className = "project-content";
  
  const titleContainer = document.createElement("div");
  titleContainer.className = "project-title-container";
  
  const title = document.createElement("div");
  title.className = "project-title"
  title.innerHTML = `${project.title}`;
  titleContainer.appendChild(title);

  const link = document.createElement('a');
  link.className = "project-link"
  link.href = project.link;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.innerHTML = ` <i class="fa-solid fa-link"></i> ${project.link.substring(8, project.link.length-1)}`
  titleContainer.appendChild(link);

  const git = document.createElement('a');
  git.className = `github-link`
  git.href = project.git;
  git.target = "_blank";
  git.rel = "noopener noreferrer";
  git.innerHTML = `<i class="fa-brands fa-github"></i> ${project.git.substring(8, project.git.length)}`
  // titleContainer.appendChild(git);

  content.appendChild(titleContainer);

  const description = document.createElement("div");
  description.className = "project-description";
  description.innerHTML = project.description;
  content.appendChild(description);

  const cred = document.createElement("div");
  cred.className = "cred-container"; 
  if(project.cred[0]) cred.innerHTML = `<span class='cred'>Username: ${project.cred[0]}</span> <br><span class='cred'>Password: ${project.cred[1]}</span>`;
  titleContainer.appendChild(cred);

  const techStack = document.createElement("div");
  techStack.className = "tech-stack";
  let list = "";
  for(let i = 0; i < project.techStack.length; i++){
    list += `<span>${project.techStack[i]}</span>`;
  }
  techStack.innerHTML = list;
  content.appendChild(techStack);

  container.appendChild(content);
  return container;
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
