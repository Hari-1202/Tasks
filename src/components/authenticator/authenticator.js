import React, { useEffect } from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux'

import { setListAction, setObjectAction } from '@wecreatesoftware/redux-higher-order-reducers';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../constants/constants';
import { updateToken } from '../../reducers/userReducer';
const Authenticator = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleSignUp = async ()=> {
    const reqBody= {
      name: "josh",
      email: "josh0203@gmail.com",
      password: "test1234",
      confirmPassword: "test1234"

    }
    const resp = await fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    })

    const result = await resp.json()
    return result
  }

  const handleLogin = async () => {
    const reqBody = {
      email: "hariharandhanraj0203@gmail.com",
      password: "test@1234"
    }
    const resp = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    })

    const result = await resp.json()
    // dispatch(setObjectAction({
    //   reducerName: 'userReducer',
    //   payload: {
    //     token: result.token
    //   }
    // }))
    dispatch(updateToken(result.token))

    navigate('/tasks');
    // navigate('/profile')

  }

  return (
    <>
      <button onClick={handleSignUp}>Signup</button>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogin}>Login</button> */}
    </>
  )

}

export default Authenticator