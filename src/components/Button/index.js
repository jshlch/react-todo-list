import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({variant, link, text, type, onClick}) => {
	if(link) {
		return(
			<Link to={link}>
				<button className={`btn ${variant} bold`} type="submit">
					{text}
				</button>
			</Link>
		)
	}
	return(
		<button className={`btn ${variant} bold`} type="submit"  onClick={onClick}>
			{text}
		</button>
	)
}

export default Button