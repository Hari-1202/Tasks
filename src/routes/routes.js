import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from '../store'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, json } from 'react-router-dom'
import Authenticator from '../components/authenticator/authenticator';
import Tasks from '../components/tasks/tasks';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Authenticator />} loader={async ({ request, params }) => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await resp.json()
      return {
        data, status: 200
      }

    }} />
    <Route path='/tasks'>
      <Route index element={<Tasks />} />
    </Route>
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
