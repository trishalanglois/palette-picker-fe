import * as actions from '../actions';

describe('actions', () => {
    it('should have a type of ADD_PROJECTS', () => {
        // Setup
        const project = [{ title: 'fosters projects' }, { title: 'trish' }];
        const expectedAction = {
            type: 'ADD_PROJECTS',
            projects: [{ title: 'fosters projects' }, { title: 'trish' }]
        };

        // Execution
        const result = actions.addProjects(project);

        // Expectation
        expect(result).toEqual(expectedAction);
    });
})

describe('actions', () => {
    it('should have a type of ADD_PROJECT', () => {
        // Setup
        const title = "foster";
        const id = 1;
        const expectedAction = {
            type: 'ADD_PROJECT',
            project: {
              id:1, 
              title:'foster'
            }
        };

        // Execution
        const result = actions.addProject(id, title);

        // Expectation
        expect(result).toEqual(expectedAction);
    });
})

describe('actions', () => {
    it('should have a type of CLICKED_PROJECT', () => {
        // Setup
        const title = "foster";
        const id = 1;
        const expectedAction = {
            type: 'CLICKED_PROJECT',
            project: {
              id:1, 
              title:'foster'
            }
        };

        // Execution
        const result = actions.clickedProject(id, title);

        // Expectation
        expect(result).toEqual(expectedAction);
    });
})

describe('actions', () => {
    it('should have a type of ADD_PALETTES', () => {
        // Setup
        const palette = [{ name: 'fosters projects', color1: '000000', color2:'22222', color3:'232232', color4:'222222', color5:'333333' }];
        const expectedAction = {
            type: 'ADD_PALETTES',
            palettes: [{ name: 'fosters projects', color1: '000000', color2:'22222', color3:'232232', color4:'222222', color5:'333333' }]
        };

        // Execution
        const result = actions.addPalettes(palette);

        // Expectation
        expect(result).toEqual(expectedAction);
    });
})