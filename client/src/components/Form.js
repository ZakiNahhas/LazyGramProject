import { TextField } from '@material-ui/core';
import React, { useState } from 'react'
const Form = (props) => {
    const {onSubmitProps,initialName,initialDate,errors}=props;
    const [name, setName] = useState(initialName); 
    const [date, setDate] = useState(initialDate); 
    const [status, setStatus] = useState({stat:0}); 
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProps({name,date,status});
    }
    const style1 = {
      width:'40%'
    }
  return (
    <div>
        <>
        <form onSubmit={onSubmitHandler}>
        {errors.map((msg, index) => <p key={index}>{msg}</p>)}
            <p>
                
                <input style={style1} type="text"  name="name" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Name"/>
            </p>
            <p>
               
                <input style={style1} type="date"  name="date" onChange={(e)=>setDate(e.target.value)} value={date} placeholder="Date"/>
            </p>
          <p> <input type="submit" value="Plan a Project"/>
          
          
          </p> 
        </form>
        </>
    </div>
  )
}

export default Form