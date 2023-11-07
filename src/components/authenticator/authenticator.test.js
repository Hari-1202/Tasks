/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-wait-for-side-effects */
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for "toBeInTheDocument" matcher

import Authenticator from './authenticator';
import { Provider, useDispatch } from 'react-redux';
import store from '../../store';
import { useNavigate } from 'react-router-dom';
import { updateToken } from '../../reducers/userReducer';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn()
}))


describe('Authenticator Component', () => {
    it('should render Signup and Login buttons', async () => {
        const dispatch = jest.fn()
        useDispatch.mockReturnValue(dispatch)
        global.fetch = jest.fn().mockResolvedValue({
            json: () => ({ status: 'Success', data: { token: 'token' } }),
        });

        const { getByText } = render(<Provider store={store}>
            <Authenticator />
        </Provider>);
        expect(getByText('Signup')).toBeInTheDocument();
        expect(getByText('Login')).toBeInTheDocument();

    });

    it('should handle login and navigation', async () => {
        const dispatch = jest.fn()
        useDispatch.mockReturnValue(dispatch)
        global.fetch = jest.fn().mockResolvedValue({
            json: () => ({ status: 'Success', token: 'token' }),
        });

        const navigate = jest.fn();
        useNavigate.mockReturnValue(navigate)

        const { getByText } = render(<Provider store={store}>
            <Authenticator />
        </Provider>);


        const loginButton = getByText('Login');
        fireEvent.click(loginButton);
        await waitFor(() => {
            expect(dispatch).toHaveBeenCalledWith(updateToken('token'));
            expect(navigate).toHaveBeenCalledWith('/tasks');
        });
    });
});






