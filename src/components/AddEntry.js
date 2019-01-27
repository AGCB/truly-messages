import React from 'react'

const AddEntry = ({ currName,
                    currNumber,
                    currContext,
                    disabled,
                    validateName,
                    validateContext,
                    validateNumber,
                    handleNameChange,
                    handleNumberChange,
                    handleContextChange,
                    handleNewEntry
                     }) => (

  <form
    onSubmit={e => handleNewEntry(e)}
  >

<input
  name="name"
  placeholder="name"
  value={currName}
  onChange={(e) => handleNameChange(e)}
  required/>
<input
  name="number"
  placeholder="number"
  value={currNumber}
  onChange={(e) => handleNumberChange(e)}
  required
/>
<input
  name="context"
  placeholder="context"
  value={currContext}
  onChange={(e) => handleContextChange(e)}
  required
/>
<button
  type="submit"
  disabled={disabled}
  >submit new entry
</button>
</form>
)



export default AddEntry;
