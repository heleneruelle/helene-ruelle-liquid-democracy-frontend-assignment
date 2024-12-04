import projects from "../data/projects.json";

const fetchProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, 1000); // Simulates a 1-second delay
  });
};

export default fetchProjects;
