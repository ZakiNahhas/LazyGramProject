import React from 'react'

const useLogout = () => {

    const logout= ()=> {
        sessionStorage.removeItem('user')
    }
    return {logout}
 
}

export default useLogout