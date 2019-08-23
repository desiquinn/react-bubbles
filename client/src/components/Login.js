import React, {useState} from "react";

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
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(credentials)
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      {/* <p>Login</p> */}
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
