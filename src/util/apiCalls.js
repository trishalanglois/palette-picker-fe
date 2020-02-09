export const retrieveProjects = async () => {
  const url = `https://mysterious-dusk-17585.herokuapp.com/api/v1/projects`;
  const response = await fetch(url);
  const projects = response.json();
  if (!response.ok) {
    throw Error('Error fetching projects');
  }
  return projects;
} 

export const postProject = async projectTitle => {
  const options = {
    method: 'POST',
    body: JSON.stringify({title: projectTitle}),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch('https://mysterious-dusk-17585.herokuapp.com/api/v1/projects', options);
  if (!response.ok) {
    throw Error('Error posting project');
  }
  return response.json();
}
