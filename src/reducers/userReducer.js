import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userReducer',
    initialState: {
        token : ''
    },
    reducers : {
        updateToken : (state, action) => {
            return {...state, token : action.payload}
        }
    }
})

export const {updateToken} = userSlice.actions
export default userSlice.reducer 