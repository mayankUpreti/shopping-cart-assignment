import React from 'react'
import {Form} from 'react-bootstrap'

const Login=()=>{

    return(
        <div className='align-center py-5'>
        <div className='row'>
            <div className='col-md-6 py-3'>
            <h3 className=' font-weight-bold'>Login</h3>
            <h5>Get access to your Orders,Wishlist and Recommendations</h5>
            </div>
            <div className='col-md-6 py-3'>
        
            <Form.Group >
            <Form.Label className='form-label'>Email</Form.Label>
            <Form.Control type="password" className='form-input' placeholder="Email" />
            </Form.Group>
            <Form.Group >
            <Form.Label className='form-label'>Password</Form.Label>
            <Form.Control type="password" className='form-input' placeholder="Password" />
            </Form.Group>
            <button className='btn-primary btn btn-block '>Login</button>
           
            </div>
        </div>
        </div>
    )
}

export default Login