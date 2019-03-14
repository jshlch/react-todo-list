import React from 'react'

const Form = ({onSubmit, children}) => {
	return(
		<form onSubmit={onSubmit}>
			{children}
		</form>
	)
}

export default Form