import store from './store'

describe('Store', () => {
  it('Should rerturn initial state opf taskReducer', () => {
    const state = store.getState().taskReducer
    expect(state).toEqual([])
  })
  it('Should return initial state of userReducer', () => {
    const state = store.getState().userReducer
    expect(state).toEqual({
        token: ''
    })
  })
})