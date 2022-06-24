import React from 'react'
import ChemicalTableRow from './ChemicalTableRow'

function ChemicalInventory({chemicals, deleteChemical, updateChemical}) {
  return (
    <div>
      <table className="chemTable">
        <tbody>
        <tr>
          <th>Chemical Name</th>
          <th>Amount in stock (grams)</th>
          <th>Location</th>
          <th>Update Amount</th>
          <th>Remove</th>
        </tr>

        {chemicals.map(chemical=><ChemicalTableRow key={chemical.id} chemical={chemical} deleteChemical={deleteChemical} updateChemical={updateChemical}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default ChemicalInventory