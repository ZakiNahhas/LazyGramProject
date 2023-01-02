import { Link,navigate } from '@reach/router'
import React, { useState } from 'react'
import Form from '../components/Form'
import axios from 'axios';


const CreateTeam = () => {
    const [project, setProject] = useState([]);
    const [errors, setErrors] = useState([]); 
    const createproject = projects  => {
        const use = localStorage.key(1)
        console.log(use)
        axios.post('http://localhost:8000/api/Project', projects )
            .then(res=>{
                setProject([...project, res.data]);
                navigate("/project")
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
        <h2>Plan a new Project</h2>
        {/* <h2> <Link to={"/"}>List</Link> | <Link to={"/project/addproject/"}>Add project</Link></h2> */}

        <Form onSubmitProps={createproject} initialName="" initialDate="" errors={errors}/>

    </div>
  )
}

export default CreateTeam