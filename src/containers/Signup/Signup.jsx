import React from 'react'
import {Form} from 'react-bootstrap'

const Signup=()=>{


const handleSubmit=(e)=>{
e.preventDefault();

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
            <Form.Control type="text" className='form-input' placeholder="First Name"  aria-required="true" required/>
            </Form.Group>
            <Form.Group >
            <Form.Label className='form-label'>Last Name</Form.Label>
            <Form.Control type="text" className='form-input' placeholder="Last Name" aria-required="true" required/>
            </Form.Group>
            <Form.Group >
            <Form.Label className='form-label'>Email</Form.Label>
            <Form.Control type="email" className='form-input' placeholder="Email" aria-required="true" required/>
            </Form.Group>
            <Form.Group >
            <Form.Label className='form-label'>Password</Form.Label>
            <Form.Control type="password" className='form-input' placeholder="Password" aria-required="true" required/>
            </Form.Group>
            <Form.Group >
            <Form.Label className='form-label'>Confirm Password</Form.Label>
            <Form.Control type="password" className='form-input' placeholder="Confirm Password" aria-required="true" required />
            </Form.Group>
            <button type='submit' className='btn-primary btn btn-block '>Signup</button>
            </form>
         

            </div>
        </div>
        </div>
    )
}

export default Signup