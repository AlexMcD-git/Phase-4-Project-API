import React , {useState} from 'react'
import SignupForm from './SignupForm'
function Login({setCurrentUser, navigate, setLoggedIn}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    const [error, setError] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            password
        }
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
          if(res.ok){
            res.json()
            .then(user=>{
              setCurrentUser(user)
              setLoggedIn(true)
              navigate("/experiments")
            })
            
          } else {
            res.json()
            .then(json => setError(json.error))
          }
        })
    }
  return (
    <body className='loginBody'>
    <div className='loginPage'>
        <h1></h1>
        <h1>Login/Signup</h1>
        <form onSubmit={onSubmit}>
        <label>
          <span>Username:</span>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
       
        <button className='loginButton' type="submit">
          <span>Login</span>
        </button>
      </form>
        <SignupForm setCurrentUser={setCurrentUser}/>
    </div>
    </body>
  )
}
export default Login
