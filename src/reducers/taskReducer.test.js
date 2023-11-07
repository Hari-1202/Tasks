import taskReducer, { updateTasks } from './taskReducer';

describe('Task Reducer', () => {
    it('should handle updateTasks action', () => {
        const initialState = [
        { task: 'Task 1' },
        { task: 'Task 2' }
        ];
        const action = updateTasks([
            { task: 'Task 3' },
            { task: 'Task 4' },
        ]);
        const newState = taskReducer(initialState, action);
        expect(newState).toEqual([
            { task: 'Task 1' },
            { task: 'Task 2' },
            { task: 'Task 3' },
            { task: 'Task 4' },
        ]);
    });
});