import React from 'react'
import styles from './Register.module.css'
import { useState, useEffect } from "react";

const Register = () => {

  const[displayName, setDisplayName] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[ConfirmPassword, setConfirmPassword] = useState("")
  const[error, setError ] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()

    setError("")
  
    const user = {
    displayName,
    email,
    password
  }

  if(password !== ConfirmPassword){
    setError("Please insert equals passwords")
    console.log("user");
    return
  }
  console.log(user);

 };

  return (
    <div className = {styles.register}>
        <h1>Register to post</h1>
        <p>Create your profile and post your thoughts</p>
        <form onSubmit= {handleSubmit}>
          <label>
            <span>Name</span>
            <input 
            type="text" 
            name="displayName" 
            required placeholder = "Name Required"
            value = {displayName}
            onChange = {(e) => setDisplayName(e.target.value)}
            />
          </label>
          <label>
            <span>Email</span>
            <input 
            type="email" 
            name="email" 
            required placeholder = "Email"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Password</span>
            <input 
            type="password" 
            name="password" 
            required placeholder = "Password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <span>Confirm Password</span>
            <input 
            type="password" 
            name="ConfirmPassword" 
            required placeholder = "Confirm your password "
            value = {ConfirmPassword}
            onChange = {(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <button className = "btn">Sign Up</button>
          {error && <p className = "error">{error}</p>}
        </form>
    </div>
  )
}

export default Register