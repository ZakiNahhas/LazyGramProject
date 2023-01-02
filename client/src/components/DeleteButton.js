import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { playerId, successCallback } = props;
    
    const deletePlayer = e => {
        let answer = window.confirm("You are sure Delete this project?");
        if (answer)
                { 
                    axios.delete('http://localhost:8000/api/Project/' + playerId)
                    .then(res=>{
                        successCallback();
                    })
                }           
       
       
         
    }
    
    return (
        <button onClick={deletePlayer}>
            Remove Project
        </button>
    )
}

