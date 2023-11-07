import { createSelector } from "@reduxjs/toolkit";

const taskState = (state) => state.taskReducer

export const getTasksState = createSelector(taskState, (state) => state );
export const getTasksData = createSelector(taskState, (state) => state)
