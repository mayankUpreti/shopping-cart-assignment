import React,{useState} from 'react'
import {Form} from 'react-bootstrap'

const Signup=()=>{
const [data,setData]=useState({});
const [error,setError]=useState(false);

const handleSubmit=(e)=>{
e.preventDefault();
if(data.password!==data.confirmpassword){
    setError(true);
    return
}else{
setError(false)}

}

const handleInputChange=(e)=>{
    data[e.target.name]=e.target.value;
    setData(data)
    }

    return(
        <div className=' p-3'>
        <div className='row align-center'>
            <div className='col-md-6 py-3'>
            <h3 className=' font-weight-bold'>Signup</h3>
                <h5>We do not share your personal details with anyone</h5>
            </div>
            <div className='col-md-6 py-3' style={{maxWidth:'400px'}}>
            <form onSubmit={handleSubmit}>
            <Form.Group >
            <Form.Label className='form-label'>First Name</Form.Label>
            <Form.Control type="text" name='first-name' className='form-input' onChange={handleInputChange} placeholder="First Name"  aria-required="true" required/>
            </Form.Group>
            <Form.Group >
            <Form.Label className='form-label'>Last Name</Form.Label>
            <Form.Control type="text" name='last-name' className='form-input' onChange={handleInputChange} placeholder="Last Name" aria-required="true" required/>
            </Form.Group>
            <Form.Group >
            <Form.Label className='form-label'>Email</Form.Label>
            <Form.Control type="email" name='email' className='form-input' onChange={handleInputChange} placeholder="Please Enter your Email" aria-required="true" required/>
            </Form.Group>
            <Form.Group >
            <Form.Label className='form-label'>Password</Form.Label>
            <Form.Control type="password" name='password' className='form-input' onChange={handleInputChange} placeholder="Please Enter your Password" aria-required="true" required/>
            </Form.Group>
            <Form.Group >
            <Form.Label className='form-label'>Confirm Password</Form.Label>
            <Form.Control type="password" name='confirmpassword' className='form-input' onChange={handleInputChange} placeholder="Please Confirm Password" aria-required="true" required />
           {
               error && <span role='status' aria-live='polite' className='error-text'>Please enter same password and confirm password</span>
           }
            </Form.Group>
            <button type='submit' className='btn-primary btn btn-block '>Signup</button>
            </form>
         

            </div>
        </div>
        </div>
    )
}

export default Signup