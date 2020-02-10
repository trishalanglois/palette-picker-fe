export const retrieveProjects = async () => {
  const url = `https://mysterious-dusk-17585.herokuapp.com/api/v1/projects`;
  const response = await fetch(url);
  const projects = response.json();
  if (!response.ok) {
    throw Error('Error fetching projects');
  }
  return projects;
} 

export const retrievePalettes = async (projectId) => {
  const url = `https://mysterious-dusk-17585.herokuapp.com/api/v1/projects/${projectId}/palettes`;
  const response = await fetch(url);
  const palettes = response.json();
  if (!response.ok) {
    throw Error('Error fetching palettes');
  }
  return palettes;
} 


export const retrieveSpecificProject = async (projectId) => {
  const url = `https://mysterious-dusk-17585.herokuapp.com/api/v1/projects/${projectId}`;
  const response = await fetch(url);
  const project = response.json();
  if (!response.ok) {
    throw Error('Error fetching project');
  }
  return project;
} 

export const retrieveSpecificPalette = async (paletteId) => {
  const url = `https://mysterious-dusk-17585.herokuapp.com/api/v1/projects/:projectId/palettes/${paletteId}`;
  const response = await fetch(url);
  const palette = response.json();
  if (!response.ok) {
    throw Error('Error fetching project');
  }
  return palette;
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

export const postPalette = async (paletteName, colorOne, colorTwo, colorThree,colorFour,colorFive,projectId) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      'name': paletteName,
      'color1': colorOne,
      'color2': colorTwo,
      'color3': colorThree,
      'color4': colorFour,
      'color5': colorFive,
      'project_id': projectId

    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch('https://mysterious-dusk-17585.herokuapp.com/api/v1/projects/:id/palettes', options);
  if (!response.ok) {
    throw Error('Error posting project');
  }
  return response.json();
}
