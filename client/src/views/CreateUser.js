import { Link,navigate } from '@reach/router'
import React, { useState } from 'react'
import Form from '../components/Form'
import axios from 'axios';
import RegForm from '../components/RegForm';


const CreateUser = () => {
    const [errors, setErrors] = useState([]); 
 
    const createproject = projects  => {
        axios.post('http://localhost:8000/api/user', projects )
       
            .then(res=>{
                console.log('mocha')
                setErrors('')
                navigate("/login")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })         
    }
  return (
    <div>
        <h2></h2>
        {/* <h2> <Link to={"/"}>List</Link> | <Link to={"/project/addproject/"}>Add project</Link></h2> */}

        <RegForm onSubmitProps={createproject} initialName="" initialName2="" initialemail="" initialpassword="" initialcpassword=""  errors={errors}/>

    </div>
  )
}

export default CreateUser