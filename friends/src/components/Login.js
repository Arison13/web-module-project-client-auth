import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router";

const Login = ()=> {
    const {push} = useHistory();

    const [state, setState]=useState({
      credentials: {
        username: '',
        password:''
      }
    })

  
    const handleChange = e => {
      setState({
        credentials: {
          ...state.credentials,
          [e.target.name]: e.target.value
        }
      })
    }
  
    const submit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5000/api/login', state.credentials)
      .then( res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload);
        push("/friends-list")
      })
      .catch(err => {
        console.log(err)
      })
    }
    return (
    <div>
      <h2> Login </h2>
      <form onSubmit={submit}>
            <input
              type="text"
              name="username"
              value={state.credentials.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={state.credentials.password}
              onChange={handleChange}
            />
            <button>Log in</button>
          </form>
    </div>
    )
  }
export default Login