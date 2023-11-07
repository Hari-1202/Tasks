import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: 'taskReducer',
    initialState: [],
    reducers: {
        updateTasks: (state, action) => {
            state.push(...action.payload)
        }
    }
})

export const { updateTasks } = taskSlice.actions
export default taskSlice.reducer