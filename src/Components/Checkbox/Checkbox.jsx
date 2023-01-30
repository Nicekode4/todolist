import React from 'react'

function Checkbox(probs) {
  return (
    
    <div>
    <input type="checkbox" name={probs.item} id={probs.item} />
    <label htmlFor={probs.item}>{probs.item}</label>
    </div>
  )
}

export default Checkbox