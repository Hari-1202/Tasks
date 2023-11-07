import React from 'react';
import { Provider } from 'react-redux'
import store from '../store'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, json } from 'react-router-dom'
import Authenticator from '../components/authenticator/authenticator';
import Tasks from '../components/tasks/tasks';
import UserContainer from '../components/user/user';
import Header from '../components/header/header';

const router = createBrowserRouter(createRoutesFromElements(
  <>
     <Route path='/' element={<Header Component={Authenticator} compName= "authentictor"/>} />
    {/* <Route path='/' element={<Authenticator />} loader={async ({ request, params }) => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await resp.json()
      return {
        data, status: 200
      }

    }} /> */}
    <Route path='/tasks'>
      <Route index element={<Header compName= "tasks" Component={Tasks} />} />
    </Route>

    <Route path='/profile' element={<Header compName= "profile" Component={UserContainer}/>}/>
  </>
))

function ApplicationRouter() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default ApplicationRouter;
