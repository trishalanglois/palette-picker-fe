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

export const retrieveSpecificPalette = async (paletteId, projectId) => {
  const url = `https://mysterious-dusk-17585.herokuapp.com/api/v1/projects/${projectId}/palettes/${paletteId}`;
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

export const postPalette = async (paletteName, colorOne, colorTwo, colorThree, colorFour,colorFive, projectId) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      'name': paletteName,
      'color1': colorOne,
      'color2': colorTwo,
      'color3': colorThree,
      'color4': colorFour,
      'color5': colorFive
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch(`https://mysterious-dusk-17585.herokuapp.com/api/v1/projects/${projectId}/palettes`, options);
  if (!response.ok) {
    throw Error('Error posting palette.');
  }
  const returnValue = await response.json()
  console.log(returnValue.id[0])
  return returnValue.id[0]
  // return response.json();
}

export const deletePalette = async (paletteId, projectId) => {
  const options = {
    method: 'DELETE',

  };

  const response = await fetch(`https://mysterious-dusk-17585.herokuapp.com/api/v1/projects/${projectId}/palettes/${paletteId}`, options);
  if (!response.ok) {
    throw Error('Error deleting palette');
  }
  return response.json();
} 

export const deleteProject = async projectId => {
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(`https://mysterious-dusk-17585.herokuapp.com/api/v1/projects/${projectId}`, options);
  if (!response.ok) {
    throw Error('Error deleting project');
  }
  return response.json();
} 

export const updateProjectTitle = async (projectId, title) => {
  const options = {
    method: 'PATCH',
    body: JSON.stringify({
      'title': title,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(`https://mysterious-dusk-17585.herokuapp.com/api/v1/projects/${projectId}`, options);
  if (!response.ok) {
    throw Error('Error updating project');
  }
  return response.json();
} 

export const updatePaletteTitle = async (projectId, paletteId, newPaletteName) => {
  const options = {
    method: 'PATCH',
    body: JSON.stringify({
      'name': newPaletteName,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(`https://mysterious-dusk-17585.herokuapp.com/api/v1/projects/${projectId}/palettes/${paletteId}`, options);
  if (!response.ok) {
    throw Error('Error updating palette');
  }
  return response.json();
} 


