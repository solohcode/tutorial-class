import React, { Component } from 'react';
 
class SecondComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            display: false
        }
    }
    render() { 
        const {email, password, display}= this.state

        const handleChange=(e)=>{
            const {name, value} = e.target
            this.setState({
                [name]: value
            })
        }

        const handleSubmit=()=>{
            this.setState({
                display: true
            })
        }

        return (
            <div>
                <p className='text-center py-5 fs-5 fw-bold'>A form that will display user info on the screen beneath the form.</p>
                
                <div className='w-50 mx-auto p-5 shadow'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input onChange={handleChange} type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                        <input onChange={handleChange} type="password" name='password' className="form-control" id="exampleFormControlTextarea1" rows="3" />
                    </div>
                    <div className='w-75 mx-auto'>
                        <button className='btn btn-primary w-100' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

                {/* <h1>https://github.com/solomon-ayodele65/tutorial-class</h1> */}
                <div className={`my-5 w-100 bg-primary p-5 text-center text-white ${display?'d-block':'d-none'}`}>
                    <h5 className='text-white'>USER DATA</h5>
                    <p className='text-white'>Welcome User {email}</p>
                    <p className='text-white'>your password is {password}</p>
                </div>
            </div>
        );
    }
}
 
export default SecondComponent;