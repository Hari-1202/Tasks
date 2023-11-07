/* eslint-disable testing-library/await-async-query */
import * as React from "react";
import { create } from "react-test-renderer";
import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import Authenticator from '../components/authenticator/authenticator';
import Tasks from '../components/tasks/tasks';
import { Provider } from "react-redux";
import store from "../store";

describe("Routing", () => {
  it("renders initial route", () => {
    let renderer = create(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<Authenticator />} />
            <Route path="/tasks" >
              <Route index element={<Tasks />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(renderer.root.findByProps({ children: 'Login' })).toBeDefined()
    expect(renderer.root.findByProps({ children: 'Signup' })).toBeDefined()
  });

  it('renders tasks route', () => {
    const renderer = create(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/tasks"]}>
          <Routes>
            <Route path="/" element={<Authenticator />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )

    expect(renderer.root.findByProps({children: 'Tasks'})).toBeDefined()
  })
});