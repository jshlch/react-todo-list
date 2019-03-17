import React from 'react'
import './style.css'

const FieldError = ({errors, field}) => {
	if(errors) {
		if(field in errors) {
			const renderedField = errors[field].map(error => {
				console.log(error)
			  return(
		    	<span className="field-error">{error}</span>
			  )
			})
			return <div className="">{renderedField}</div>
		}
	} 
	return <div></div>
}

export default FieldError