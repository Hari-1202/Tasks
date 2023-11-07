import { createSelector } from "reselect";

const userState = (state) => state.userReducer


export const userDataSelector = createSelector(userState, (state) =>  state)
export const userTokenSelector = createSelector(userState, ({token}) => token)