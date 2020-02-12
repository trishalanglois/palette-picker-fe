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