import React from 'react'
import { useState } from 'react'
import { baseUrl } from '../../constants/constants'
import { useSelector } from 'react-redux'
import { userTokenSelector } from '../../selectors/userSelector'
import { useNavigate } from 'react-router-dom'

const UserContainer = () => {
    const token = useSelector(userTokenSelector)
    const navigate = useNavigate()
    const [editDetails, setEditDetails] = useState({
        password: '',
        newPassword: '',
        confirmPassword: ''
    })
    const updateDetails = async () => {
        const { password, newPassword, confirmPassword } = editDetails
        console.log(editDetails, token)
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match')
            setEditDetails({
                password: '',
                newPassword: '',
                confirmPassword: ''
            })
        } else {
            const response = await fetch(`${baseUrl}/users/changePassword`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    authtoken: token
                },
                body: JSON.stringify({
                    password,
                    newPassword
                })
            })
            const result = await response.json()
            if(result.status === 'Success'){
                setTimeout(() => {
                    navigate('/')
                }, 10000)
                alert('Password updated successfully . Please log in again. You are being redirect to the login screen .....')
                setEditDetails({
                    password: '',
                    newPassword: '',
                    confirmPassword: ''
                })         
            }
        }

    }
    return (
        <div>
            <div className='header'>

            </div>
            <div className='formContainer'>
                <div>
                    <p>Enter password</p>
                    <input value={editDetails.password} onChange={(e) => setEditDetails({ ...editDetails, password: e.target.value })} type='text' />
                </div>
                <div>
                    <p>Enter new password</p>
                    <input value={editDetails.newPassword} onChange={(e) => setEditDetails({ ...editDetails, newPassword: e.target.value })} type='password' />
                </div>
                <div>
                    <p>Confirm new password</p>
                    <input value={editDetails.confirmPassword} onChange={(e) => setEditDetails({ ...editDetails, confirmPassword: e.target.value })} type='password' />
                </div>
                <button onClick={updateDetails}>Update</button>
            </div>
        </div>
    )
}

export default UserContainer