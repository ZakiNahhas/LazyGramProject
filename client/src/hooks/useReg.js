import { navigate } from '@reach/router'
import axios from 'axios'
import React, { useState } from 'react'

const useReg = () => {
    const [error,setError]=useState(null)
    const [isLoading,setIsloading]=useState(null)

    const reg= async (firstName,lastName,email,password,confirmPassword)=> {
        setIsloading(true)
        setError(null)

        const response = await fetch('http://localhost:8000/api/user/reg',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({firstName,lastName,email,password,confirmPassword})
        })
        const json = await response.json()
        if(!response.ok){
            setIsloading(false)
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            navigate("/login")

        }
    }
    return {reg,isLoading,error}

}

export default useReg