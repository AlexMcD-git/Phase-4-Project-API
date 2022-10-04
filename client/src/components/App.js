import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom';
import Login from "./Login";
import ExperimentsContainer from "./ExperimentsContainer";
import ChemicalForm from "./ChemicalForm";
import ChemicalInventory from "./ChemicalInventory";
import NavBar from "./NavBar";
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState('')
  const [chemicals, setChemicals] = useState([])
  const [experiments, setExperiments] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/auth")
      .then(res => {
        if(res.ok){
          res.json().then(user => setCurrentUser(user))
        }
      })

      fetch("/chemicals")
      .then(res=>res.json())
      .then(setChemicals)
      if(!currentUser){
        navigate("/login")
      }
  }, [])

  useEffect(() => {
    fetch(`/users/${currentUser.id}/experiments`)
    .then(res => {
      if(res.ok){
        res.json().then(experiments => setExperiments(experiments))
      }
    })
  }
, [currentUser])

  function onLogout(){
    setCurrentUser('')
    setLoggedIn(false)
    navigate("/login")
  }

  function deleteChemical(id){
    fetch(`/chemicals/${id}`,{
      method: 'DELETE',
    })
    .then(setChemicals([...chemicals].filter(chemical =>{
      return chemical.id !== id
    })))
  }
  
  function updateChemical(e, id, newAmount){
    e.preventDefault()
    fetch(`/chemicals/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        'amount_in_grams': newAmount
      }
    )
    })
    .then(res=>res.json())
    .then(updatedChemical=>setChemicals([...chemicals].map(chemical=>{
      return chemical.id===updatedChemical.id?updatedChemical:chemical
    })))
  }


  return (
    <div className="App">
      <NavBar onLogout={onLogout} loggedIn={loggedIn}/>
      <Routes>
        <Route exact path="/login" element={<Login setCurrentUser={setCurrentUser} navigate={navigate} setLoggedIn={setLoggedIn}/>}/>
        <Route exact path="/experiments" element={<ExperimentsContainer experiments={experiments} chemicals={chemicals} setExperiments={setExperiments} currentUser={currentUser}/>}/>
        <Route exact path="/chemical_inventory" element={<ChemicalInventory chemicals={chemicals} deleteChemical={deleteChemical} updateChemical={updateChemical}/>}/>
        <Route exact path="/new_chemical" element={<ChemicalForm chemicals={chemicals} setChemicals={setChemicals}/>}/>
      </Routes>
    </div>
  );
}

export default App;