import React from 'react'

const Card = ({variant, children}) => {
	return(
		<div className={`card p-5 ${variant}`}>
     	{children}
    </div>
	)
}

export default Card