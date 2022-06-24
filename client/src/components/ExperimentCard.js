import React from 'react'

function ExperimentCard({experiment, setExperiments}) {

  function removeChemicalFromExperiment(exp_id,chem_id){

    fetch(`/chemical_experiments`,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        experiment_id: exp_id,
        chemical_id: chem_id
      })
    })
    setExperiments((experiments)=>experiments.map(exp=>{
      if (exp.id !== exp_id){
        return exp
      }
      else{
        exp.chemicals=exp.chemicals.filter(chemical=>chemical.id!==chem_id)
        return exp
      }
    }))

  }

  return (
    <div className="experimentCard">
        <h1>{experiment.description}</h1>
        <h3>Chemicals for this experiment:</h3>
        <ul>
            {experiment.chemicals.map(chemical=> <li key={chemical.id}>{chemical.name}<button onClick={()=>removeChemicalFromExperiment(experiment.id, chemical.id)}>X</button></li>)}
        </ul>
    </div>
  )
}

export default ExperimentCard