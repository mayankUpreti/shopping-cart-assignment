import React from 'react'
import {Form} from 'react-bootstrap'

const Signup=()=>{

    return(
        <div className='align-center py-5'>
        <div className='row'>
            <div className='col-md-6 py-3'>
            <h3 className=' font-weight-bold'>Signup</h3>
                <h5>We do not share your personal details with anyone</h5>
            </div>
            <div className='col-md-6 py-3'>
        
            <Form.Group >
            <Form.Label className='form-label'>First Name</Form.Label>
            <Form.Control type="password" className='form-input' placeholder="First Name" />
            </Form.Group>
            <Form.Group >
            <Form.Label className='form-label'>Last Name</Form.Label>
            <Form.Control type="password" className='form-input' placeholder="Last Name" />
            </Form.Group>
            <Form.Group >
            <Form.Label className='form-label'>Email</Form.Label>
            <Form.Control type="password" className='form-input' placeholder="Email" />
            </Form.Group>
            <Form.Group >
            <Form.Label className='form-label'>Password</Form.Label>
            <Form.Control type="password" className='form-input' placeholder="Password" />
            </Form.Group>
            <Form.Group >
            <Form.Label className='form-label'>Confirm Password</Form.Label>
            <Form.Control type="password" className='form-input' placeholder="Confirm Password" />
            </Form.Group>
    
          
            <button className='btn-primary btn btn-block '>Signup</button>
           
            </div>
        </div>
        </div>
    )
}

export default Signup