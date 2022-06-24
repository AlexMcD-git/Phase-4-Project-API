import React from 'react'
import { NavLink} from 'react-router-dom'
function NavBar({onLogout, loggedIn}) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }
      if (!loggedIn) return (<div></div>)
  return (
    <div>
        <br/>
        <div className= 'navWrapper'>
        <button onClick={handleLogout}>Logout</button>
          <NavLink className="navLinks" to='/experiments'>
            View Experiments
          </NavLink>
          <NavLink className="navLinks" to='/chemical_inventory'>
            Chemical Inventory
          </NavLink>
          <NavLink className="navLinks" to='/new_chemical'>
            Chemical Check-in
          </NavLink>
        </div>
    </div>
  )
}

export default NavBar