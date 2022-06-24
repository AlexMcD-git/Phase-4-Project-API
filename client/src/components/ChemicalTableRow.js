import React, {useState} from 'react'

function ChemicalTableRow({chemical, deleteChemical, updateChemical}) {
    const [formGrams, setFormGrams] = useState(0)
    function handleChange(e){
        setFormGrams(e.target.value)
    }
  return (
    <tr>
        <td>{chemical.name}</td>
        <td>{chemical.amount_in_grams}</td>
        <td>{chemical.location}</td>
        <td><form>
        <input className="smallInput" type="number" id = 'input' name="amount_in_grams" placeholder = "grams" value = {formGrams} onChange = {handleChange} />
        <button className="button2" type="submit" onClick={(e)=>updateChemical(e, chemical.id, formGrams)}>Update</button>
        </form></td>
        <td><button className="button1" onClick={()=>deleteChemical(chemical.id)}>Remove</button></td>
  </tr>
  )
}

export default ChemicalTableRow