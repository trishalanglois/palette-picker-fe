export const retrieveProjects = async () => {
      const url = `https://mysterious-dusk-17585.herokuapp.com/api/v1/projects`;
      const response = await fetch(url);
      const projects = response.json();
      if (!response.ok) {
        throw Error('Error fetching projects');
      }
      return projects;
  }