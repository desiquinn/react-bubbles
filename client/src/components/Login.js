import React, {useState} from "react";
import axios from 'axios';


const Login = () => {

  const[credentials, setCredentials] = useState({
                                          username: '',
                                          password: '',
                                        })

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = (event) => {
    // console.log (event.target.name, event.target.value)
    // console.log (credentials)
    setCredentials({
      ...credentials, 
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        // console.log('Credentials:', credentials)
        // console.log('Login Success Response:', res)
        // console.log('Token:', res.data.payload)
        localStorage.setItem('token', res.data.payload);
        // props.history.push('/bubblepage')
      })
      .catch(err => {
        console.log('Login Error:', err.response)
        console.log('Login Error Message:', err.response.data)
      })
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label> Username: </label>
          <input 
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleChange}
          />
   
        <label>Password:</label>
          <input 
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
          />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
