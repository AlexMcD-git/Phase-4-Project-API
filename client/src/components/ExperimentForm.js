import React, {useState} from 'react'

function ExperimentForm({currentUser, setExperiments}) {

    const [description, setDescription] = useState("")
    const handleChange = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch ('/experiments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    user_id:currentUser.id,
                    description: description,
                    is_complete: false
                }
            )
        })
        .then ((resp) => resp.json())
        .then(newExperiment=>{
            setExperiments((previousState)=>[...previousState, newExperiment])
        })
        setDescription("")
    }
    


    return (
        <div>
            <form className = 'form' onSubmit = {handleSubmit}>
                <label>Description of New Experiment: </label>
                <input type="text" id = 'input' name="description" placeholder = "Description" value = {description} onChange = {handleChange} /><br />
                <button className = 'btn' type="submit"> Add Experiment </button>
            </form>
        </div>
  )
}

export default ExperimentForm