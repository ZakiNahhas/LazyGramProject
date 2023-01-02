import { navigate } from '@reach/router'
import axios from 'axios'
import React, { useState } from 'react'

const useLogin = () => {
    const [error,setError]=useState(null)
    const [isLoading,setIsloading]=useState(null)

    const login= async (email,password)=> {
        setIsloading(true)
        setError(null)

        const response = await fetch('http://localhost:8000/api/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
        })
        const json = await response.json()
        if(!response.ok){
            setIsloading(false)
            setError(json.error)
        }
        if(response.ok){
            sessionStorage.setItem('user',JSON.stringify(json))
            // localStorage.setItem('user',JSON.stringify(json))
          
            var data = JSON.parse(sessionStorage.getItem('user'))
            console.log(data.user._id)
  // Project.findOne({_id:request.params.id})
            // .then(Project => response.json(Project))
            // .catch(err => response.json(err))

            navigate("/home")

        }
    }
    return {login,isLoading,error}

}

export default useLogin