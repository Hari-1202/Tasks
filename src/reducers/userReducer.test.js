import userReducer, { updateToken } from "./userReducer"

describe('User reducer', () => {
    it('should update token', () => {
        const initialState = {
            token : ''
        }

        const action = updateToken('token')
        const updatedState = userReducer(initialState, action )
        expect(updatedState).toEqual({token: 'token'})
    })
})