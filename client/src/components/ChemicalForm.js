import React, {useState} from 'react'

function ChemicalForm({chemicals, setChemicals}) {
    const initialState = {
        name: "",
        amount_in_grams:0,
        location:""
    }

    const [formState, setFormState] = useState(initialState)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState((prevState) => ({...prevState, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch ('/chemicals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        })
        .then ((resp) => resp.json())
        .then(newChemical=>{
            setChemicals([...chemicals, newChemical])
            setFormState(initialState)
        })
    }
    


    return (
        <div>
            <form className = 'form' onSubmit = {handleSubmit}>
                <label>Name: </label>
                <input type="text" id = 'input' name="name" placeholder = "Chemical Name" value = {formState.name} onChange = {handleChange} /><br />
                <label>Amount of Chemical(g): </label>
                <input type="number" id = 'input' name="amount_in_grams" placeholder = "grams" value = {formState.amount_in_grams} onChange = {handleChange} /><br />
                <label>Storage Location: </label>
                <input type="text" id = 'input' name="location" placeholder = "Room Name" value = {formState.location} onChange = {handleChange} /><br />
                <button className = 'btn' type="submit"> Add Chemical </button>
            </form>
        </div>
  )
}

export default ChemicalForm