import React from 'react'
import {Form} from 'react-bootstrap'

const Login=()=>{
const handleSubmit=(e)=>{
e.preventDefault()
}


    return(
        <div className=' p-3'>
        <div className='row align-center' >
            <div className='col-md-6 py-3'>
            <h3 className=' font-weight-bold'>Login</h3>
            <h5>Get access to your Orders,Wishlist and Recommendations</h5>
            </div>
            <form onSubmit={handleSubmit} className='col-md-6 py-3' style={{maxWidth:'400px'}}>
        
            <Form.Group >
            <Form.Label className='form-label'>Email</Form.Label>
            <Form.Control type="email" className='form-input' placeholder="Email" required/>
            </Form.Group>
            <Form.Group >
            <Form.Label className='form-label'>Password</Form.Label>
            <Form.Control type="password" className='form-input' placeholder="Password" required/>
            </Form.Group>
            <button className='btn-primary btn btn-block '>Login</button>
           
            </form>
        </div>
        </div>
    )
}

export default Login