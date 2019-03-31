import React from 'react'

const TextField = ({fid, onChange, placeholder, type, variant}) => {
	return(
		<div className={`form-group ${variant} w-100`}>
			<input 
				id={fid} 
				type={type || 'text'} 
				className="form-control upppercase" 
				onChange={onChange}
				autoComplete="off" 
				placeholder={placeholder}
			/>
		</div>
	)
}

export default TextField



