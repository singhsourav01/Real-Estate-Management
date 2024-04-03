import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    
      
      <div className="wrapper">
        <div className="inner-warpper text-center">
        <h2 className='title'>Login</h2>
          <form action="" id="formvalidate">

            <div className="input-group">
              <input className="form-control" name="userName" id="userName" type="text" placeholder="User Name" autoComplete="off" />
              <span className="lighting"></span>
            </div>

            <div className="input-group">
              <input className="form-control" name="userPassword" id="userPassword" type="password" placeholder="Password" autoComplete="off" />
              <span className="lighting"></span>
            </div>

            <button type="submit" id="login">Login</button>
            <div className="clearfix supporter">
              
              <Link className="forgot pull-right" to="/">Forgot Password?</Link>
            </div>
            
          </form>
        </div>
        <div className="signup-wrapper text-center">
          <Link to="/Signup">Don't have an accout? <span className="text-primary">Create One</span></Link>
        </div>
      </div>



    </>
  )
}

export default Login
