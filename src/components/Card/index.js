import React from 'react'

const Card = ({variant, children}) => {
	return(
		<div className={`card ${variant}`}>
     	{children}
    </div>
	)
}

export default Card