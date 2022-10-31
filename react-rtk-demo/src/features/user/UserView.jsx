import React from 'react'
import { useEffect } from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

export const UserView = () => {

    const dipatch=useDispatch()
    useEffect(()=>{
        dipatch(fetchUsers())
    },[])
    const usersData=useSelector((state)=>state.user.users)
    console.log(usersData)
  return (
    <>
        <h2>List of Users:</h2> 
        <ol>
            {usersData.map(user=><li>{user}</li>)}
        </ol> 
    </>
  )
}
