import { retrieveProjects, retrievePalettes, retrieveSpecificProject, retrieveSpecificPalette, postProject } from './apiCalls';



describe('retrieveProjects', () => {
  let mockResponse = [{
    id: 1,
    title: 'Foster',
      palettes: [{
        id: 20,
        name: 'trish colors',
        color1: '#F7C59F',
        color2: '#2A324B',
        color3: '#767B91',
        color4: '#C7CCDB',
        color5: '#E1E5EE',
        project_id: 1
    },
    {
        id: 21,
        name: 'foster colors',
        color1: '#57739',
        color2: '#BDD5EA',
        color3: '#F7F7FF',
        color4: '#FE5F55',
        color5: '#495867',
        project_id: 1

    },
    {
        id: 23,
        name:'heather colors',
        color1:'#000000',
        color2:'#363946',
        color3:'#696773',
        color4:'#819595',
        color5:'#B1B6A6',
        project_id: 1
        }]
},
{
    id: 2,
    title: 'fruits',
      palettes: [{
        id: 30,
        name: 'apple colors',
        color1: '#F7C59F',
        color2: '#2A324B',
        color3: '#767B93',
        color4: '#C7CCDG',
        color5: '#E1E5EE',
        project_id: 2
    },
    {
        id: 25,
        name: 'orange colors',
        color1: '#57739',
        color2: '#BDD5E2',
        color3: '#F7F7FF',
        color4: '#FE5F53',
        color5: '#495864',
        project_id: 2

    },
    {
        id: 28,
        name:'grape colors',
        color1:'#000000',
        color2:'#363945',
        color3:'#696772',
        color4:'#819591',
        color5:'#B1B6A6',
        project_id: 2
        }]
}]


  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should be passed the correct url', () => {
    retrieveProjects()

    expect(window.fetch).toHaveBeenCalledWith('https://mysterious-dusk-17585.herokuapp.com/api/v1/projects');
  })

  it('should return an array of projects', () => {
    expect(retrieveProjects()).resolves.toEqual(mockResponse);
  })

  it('should return an error for response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(retrieveProjects()).rejects.toEqual(Error('Error fetching projects'))
  })
})

describe('retrievePalettes', () => {
    let mockResponse = [{
        id: 20,
        name: 'trish colors',
        color1: '#F7C59F',
        color2: '#2A324B',
        color3: '#767B91',
        color4: '#C7CCDB',
        color5: '#E1E5EE',
        project_id: 1
    },
    {
        id: 21,
        name: 'foster colors',
        color1: '#57739',
        color2: '#BDD5EA',
        color3: '#F7F7FF',
        color4: '#FE5F55',
        color5: '#495867',
        project_id: 1

    },
    {
        id: 23,
        name:'heather colors',
        color1:'#000000',
        color2:'#363946',
        color3:'#696773',
        color4:'#819595',
        color5:'#B1B6A6',
        project_id: 1
}]

  
  
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it('should be passed the correct url', () => {
        let id = 1;
      retrievePalettes(id)
  
      expect(window.fetch).toHaveBeenCalledWith(`https://mysterious-dusk-17585.herokuapp.com/api/v1/projects/${id}/palettes`);
    })
  
    it('should return an array of palettes', () => {
      expect(retrievePalettes()).resolves.toEqual(mockResponse);
    })
  
    it('should return an error for response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(retrievePalettes()).rejects.toEqual(Error('Error fetching palettess'))
    })
})
  
describe('retrieveSpecificProject', () => {
    let mockResponse = {
        id: 1,
        title: 'Foster',
        palettes: [{
            id: 20,
            name: 'trish colors',
            color1: '#F7C59F',
            color2: '#2A324B',
            color3: '#767B91',
            color4: '#C7CCDB',
            color5: '#E1E5EE',
            project_id: 1
        }],
    }

  
  
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it('should be passed the correct url', () => {
        let projectId = 1;
      retrieveSpecificProject(projectId)
  
      expect(window.fetch).toHaveBeenCalledWith(`https://mysterious-dusk-17585.herokuapp.com/api/v1/projects/${projectId}`);
    })
  
    it('should return an array of projects', () => {
      expect(retrieveSpecificProject()).resolves.toEqual(mockResponse);
    })
  
    it('should return an error for response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(retrievePalettes()).rejects.toEqual(Error('Error fetching palettess'))
    })
})
  
describe('retrieveSpecificPalette', () => {
    let mockResponse = {
        id: 20,
        name: 'trish colors',
        color1: '#F7C59F',
        color2: '#2A324B',
        color3: '#767B91',
        color4: '#C7CCDB',
        color5: '#E1E5EE',
        project_id: 1
    }
  
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it('should be passed the correct url', () => {
        let projectId = 1;
        let paletteId = 20;
      retrieveSpecificPalette(paletteId, projectId)
  
      expect(window.fetch).toHaveBeenCalledWith(`https://mysterious-dusk-17585.herokuapp.com/api/v1/projects/${projectId}/palettes/${paletteId}`);
    })
  
    it('should return a palette object', () => {
      expect(retrieveSpecificPalette()).resolves.toEqual(mockResponse);
    })
  
    it('should return an error for response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(retrieveSpecificPalette()).rejects.toEqual(Error('Error fetching palettess'))
    })
})
  
describe('postProject', () => {
    let mockTitle = 'foster' 
    let mockResponse = {
        id:3,
        title: 'foster'
      }
    
  
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(id)
        });
      });
    });
  
    it('should be passed the correct url', () => {
       const expected = [ 'https://mysterious-dusk-17585.herokuapp.com/api/v1/projects',{
        method: 'POST',
           body: JSON.stringify({title:mockTitle}),
        headers: {
          'Content-Type': 'application/json'
        }
      }];
        
      postProject(mockTitle)
  
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    })
  
    it('should return a new project with title', () => {
      expect(postProject(mockTitle)).resolves.toEqual(mockResponse);
    })
  
    it('should return an error for response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(retrieveSpecificPalette()).rejects.toEqual(Error('Error fetching palettess'))
    })
  })