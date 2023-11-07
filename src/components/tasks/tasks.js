import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userTokenSelector } from '../../selectors/userSelector'
import { baseUrl } from '../../constants/constants';
import { setListAction } from '@wecreatesoftware/redux-higher-order-reducers';
import React from 'react';
import { updateTasks } from '../../reducers/taskReducer';
const Tasks = () => {
  const dispatch = useDispatch()
  const userToken = useSelector(userTokenSelector)
  console.log(userToken)
  useEffect(() => {
    async function fetchTasks() {
      const result = await fetch(`${baseUrl}/tasks`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authToken: userToken
        }
      })
      const tasks = await result.json()
      dispatch(updateTasks(tasks.data))
    }
    userToken && fetchTasks()
  }, [])

  return (
    <div>Tasks</div>
  )
}

export default Tasks