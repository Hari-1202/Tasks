import { userDataSelector, userTokenSelector } from "./userSelector"

describe('Select data from userReducer', () => {
    let state
    beforeEach(() => {
        state = {
            'userReducer': {
                token : 'token'
            }
        }
    })
    it('Returns entire userData', () => {
        expect(userDataSelector(state)).toEqual({
            token : 'token'
        })
    })
    it('Returns userToken', () => {
        expect(userTokenSelector(state)).toEqual('token')
    })
})