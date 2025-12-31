import React, { useState } from 'react' 
import './LoginSignUp.css'

import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'
/*import telephone_icon from '../Assests/telephone.png'*/

const LoginSignUp = () => {

    const [action, setAction] = useState("Sign Up");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handelSubmit = () => {
    if (action === "Sign Up") {
        if (!username || !email || !password || !confirmPassword){
            alert("Please fill in all fields to Sign Up.");
            return;
        }
        if (password !== confirmPassword){
            alert("Password do not match.");
            return;
        }
    }else{
        // Login
        if (!email || !password){
            alert("Please fill in email and password to Log In.");
            return;
        }
    }
    if (password.length < 6){
        alert("Password must be at least 6 characters.");
        return;
    }
    alert(`${action} Accepted!`);
    console.log({action, username, email, password });

    //Clearing fields after sucessfull submit 

    setUsername('');
    setPassword('');
    setEmail('');
    setConfirmPassword('');
};


  return (
    <div className='container'>
        <div className='header'>
            <div className='text'> {action} </div>
            <div className='underline'></div>
        </div>
        {/* there are three <div> tags for user, email, password... more to come*/}
        <div className='inputs'>
            {action === "Login"?<div></div> : <div className='input'>
                <img src={user_icon} alt="user icon" />
                <input type="text" 
                placeholder='Name of the Volunteer'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </div>}
            
             <div className='input'>
                <img src={email_icon} alt="place to type email" />
                <input type="email"
                 placeholder='Enter the Email' 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
            </div>
             <div className='input'>
                <img src={password_icon} alt="Password" />
                <input type="password" 
                placeholder='Enter your Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                {action === "Sign Up" && (
                    <input type="password"
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                )}
            </div>
            {/*<div className='input'>
                <img src={telephone_icon} alt="telephone number" />
                <input type="tel" placeholder='Enter your Phone Number' />
            </div>*/}
        </div>
        {action ==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span><a href="/click here">click here!</a></span>
        </div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>{/*in here we are using a ternary operator*/}
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Log In</div>
        </div>

        <div className="submit"
        style={{marginLeft: 'calc(50% - 90px)'}}
        onClick={handelSubmit}>Submit</div>
      
    </div>
  );
};

export default LoginSignUp

