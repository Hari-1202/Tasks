import { getTasksData } from "./tasksSelectors"

describe('Selecting values from tasking tesk reducer', () => {
    let state 
    beforeEach(() => {
        state = {
            "taskReducer": [{
                task : "task1"
            },
            {
                task : "task2"
            }]
        }
    })
    it('Entire task reducer data', () => {
        expect(getTasksData(state)).toEqual([{
            task : "task1"
        },
        {
            task : "task2"
        }])
    })
})