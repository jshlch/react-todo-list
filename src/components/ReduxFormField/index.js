import React from 'react'

// export const renderTextField = (props) => {
// 	return console.log(props)
export const renderTextField = ({fid, input, meta, placeholder, variant, type}) => {
	return(
		<div className={`form-group ${variant} w-100`}>
			<input 
				id={fid} 
				type={type || 'text'} 
				className="form-control" 
				onChange={input.onChange}
				autoComplete="off" 
				placeholder={placeholder}
				value={input.value}
			/>
		</div>
	)
}




