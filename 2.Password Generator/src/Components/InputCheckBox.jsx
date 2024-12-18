


function InputCheckBox({text,handleCheckBoxChange, id,checked}) {
    
  return (
    <div>
        <input
        onChange={()=>handleCheckBoxChange(id)}
        type="checkbox"
        className="selection:bg-black"
        checked={checked}
        />
        <h3 onClick={()=>handleCheckBoxChange(id)}>{text}</h3>
    </div>
  )
}

export default InputCheckBox