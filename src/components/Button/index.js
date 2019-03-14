import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({variant, link, text, type, onClick}) => {
	if(link) {
		return(
			<Link to={link}>
				<button className={`${variant} waves-effect bold`} type="submit">
					{text}
				</button>
			</Link>
		)
	}
	return(
		<button className={`${variant} waves-effect bold`} type="submit">
			{text}
		</button>
	)
}

export default Button