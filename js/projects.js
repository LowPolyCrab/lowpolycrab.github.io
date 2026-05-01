// Project data
const projects = [
  {
    name: "UFG(Untitled Fish Game)",
    image: "images/project1.jpg",
    engine: "Unity",
    role: "Gameplay, AI, Environment tools",
    description: "",
    link: "project1.html"
  },
  {
    name: "Plastic Deformation",
    image: "images/project2.jpg",
    engine: "Unreal Engine",
    role: "Programmer",
    description: "",
    link: "project2.html"
  },
  {
    name: "Voxel Terrain Generation and Terraforming",
    image: "images/project3.jpg",
    engine: "Unity",
    role: "Programmer",
    description: "",
    link: "project3.html"
  },
  {
    name: "Dynamic Climbing Controller",
    image: "images/project4.jpg",
    engine: "Unity",
    role: "Programmer",
    description: "",
    link: "project4.html"
  }
];

// Render projects
const projectsContainer = document.getElementById("projects");

projects.forEach(p => {
  const projectEl = document.createElement("div");
  projectEl.classList.add("project", "bg-purpledark", "rounded-xl", "shadow-md", "overflow-hidden");

  projectEl.innerHTML = `
    <div class="project-header flex items-center justify-between cursor-pointer p-4 bg-purple-dark hover:bg-lavender transition-colors duration-300" onclick="toggleProject(this)">
      <div class="flex items-center">
        <img src="${p.image}" alt="${p.name}" class="w-32 h-20 object-cover rounded-md mr-4 shadow-md border border-purple-dark">
        <h2 class="text-xl font-semibold text-white">${p.name}</h2>
      </div>
      <svg class="w-6 h-6 text-lavender transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    <div class="project-content max-h-0 overflow-hidden transition-all duration-500 px-4 text-lightgrey">
      <p><span class="font-semibold text-lavender">Engine:</span> ${p.engine}</p>
      <p><span class="font-semibold text-lavender">Role:</span> ${p.role}</p>
      <p class="mt-2">${p.description}</p>
      <a href="${p.link}" class="inline-block mt-3 text-lavender hover:text-white font-medium">View Full Breakdown →</a>
    </div>
  `;

  projectsContainer.appendChild(projectEl);
});

// Toggle accordion
function toggleProject(header) {
  const content = header.nextElementSibling;
  const arrow = header.querySelector("svg");

  if(content.classList.contains("max-h-0")) {
    content.classList.remove("max-h-0");
    content.classList.add("max-h-96", "py-4");
    arrow.classList.add("rotate-180");
  } else {
    content.classList.add("max-h-0");
    content.classList.remove("max-h-96", "py-4");
    arrow.classList.remove("rotate-180");
  }
}