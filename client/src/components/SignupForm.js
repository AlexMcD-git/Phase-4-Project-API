import React, {useState} from 'react'

function SignupForm({setCurrentUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            password
        }
       
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
          if(res.ok){
            res.json()
            .then(user=>{
              setCurrentUser(user)
            })
            
          } else {
            res.json()
            .then(json => setErrors(json.errors))
          }
        })
    }
  return (
        <form onSubmit={onSubmit}>
            <br/>
        <label>
          Username
   
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
       
        <input type="submit" value="Sign Up" />
      </form>
  )
}

export default SignupForm