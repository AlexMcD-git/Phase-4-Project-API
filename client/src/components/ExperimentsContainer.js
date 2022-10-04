import React, {useState} from 'react'
import ExperimentCard from './ExperimentCard'
import ExperimentForm from './ExperimentForm'
function ExperimentsContainer({experiments, chemicals, setExperiments, currentUser}) {
  let initialState = {}
  if (experiments[0]){
  initialState = {
    experiment: 0,
    chemical: 0,
}}else{
  initialState = {
    experiment: 0,
    chemical: 0,
}}
  const [formState, setFormState] = useState(initialState)

  function handleExpChange(e) {
    console.log(e.target.value)
    const a=experiments.filter(experiment => experiment.description === e.target.value)
    console.log(a[0].id)
    setFormState({...formState, experiment: a[0].id})
}
function handleChemChange(e) {
  console.log(e.target.value)
  const a=chemicals.filter(chemical => chemical.name === e.target.value)
  console.log(a[0].id)
  setFormState({...formState, chemical: a[0].id})
}

  function postAssociation(e){
    e.preventDefault()
    console.log(formState)
    fetch(`/chemical_experiments`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        experiment_id: formState.experiment,
        chemical_id: formState.chemical
      })
    })
    .then(r=>r.json())
    .then(data=>setExperiments([...experiments].map(experiment=>{
      return experiment.id===data.id?data:experiment
    })))
    setFormState(initialState)
  }

  console.log(experiments)
  return (
    <div>
        <ExperimentForm currentUser={currentUser} setExperiments={setExperiments}/>
        <br/>
        {experiments[0]?<>
        <div className="imgWrapper">{experiments.map(exp =><ExperimentCard key={exp.id} experiment={exp} setExperiments={setExperiments}/>)}</div>

        <h2>Add chemical to an experiment</h2>
        <form onSubmit={(e)=>postAssociation(e)}>
          <label>Experiment to add chemical to: </label>
          <select name="experiment" onChange={(e)=>handleExpChange(e)} value={experiments.filter(experiment=>experiment.id===formState.experiment)[0]?experiments.filter(experiment=>experiment.id===formState.experiment)[0].description:""}>
            {experiments.map(exp=><option key={exp.id}>{exp.description}</option>)}
          </select>
          <br/>
          <label>Chemical to add</label>
          <select name="chemical" onChange={(e)=>handleChemChange(e)} value={chemicals.filter(chemical=>chemical.id===formState.chemical)[0]?chemicals.filter(chemical=>chemical.id===formState.chemical)[0].name:""} >
            {chemicals.map(chem=><option key={chem.id}>{chem.name}</option>)}
          </select>
          <br/>
          <button type="submit">Add</button>
        </form>
        </>:null}
    </div>
  )
}

export default ExperimentsContainer