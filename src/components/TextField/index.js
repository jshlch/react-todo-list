import React from 'react'

const TextField = ({fid, onChange, placeholder}) => {
	return(
		<div className="input-field">
      <input 
	      id={fid} 
	      type="text" 
	      className="validate" 
	      autoComplete="off" 
	      onChange={onChange}
      />
      <label htmlFor={fid}>{placeholder}</label>
    </div>
	)
}

export default TextField



