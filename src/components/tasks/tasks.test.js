import 'jest-fetch-mock';

import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { render, waitFor } from '@testing-library/react';
import Tasks from './tasks';
import store from '../../store';
import { setListAction } from '@wecreatesoftware/redux-higher-order-reducers';
import { updateTasks } from '../../reducers/taskReducer';

// Mock the 'react-redux' module
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

// Mock the '@wecreatesoftware/redux-higher-order-reducers' module
jest.mock('@wecreatesoftware/redux-higher-order-reducers', () => ({
  ...jest.requireActual('@wecreatesoftware/redux-higher-order-reducers'),
  listReducer: jest.fn(),
  objectReducer: jest.fn(),
  setListAction: jest.fn(),
}));

describe('Testing task component', () => {
  it('test', async () => {
    const dispatch = jest.fn()
    useSelector.mockReturnValue('hello world');
    useDispatch.mockReturnValue(dispatch)
    global.fetch = jest.fn()
    global.fetch.mockResolvedValue({
      json: () => ({
        data: [{ task: 'task' }]
      })
    })

    render(
      <Provider store={store}>
        <Tasks />
      </Provider>
    )

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith(updateTasks([{ task: 'task' }]))
    })

  });
});
