import React from 'react';
import MainRoutes from './rootRoutes'
import LoadingBar from 'react-redux-loading-bar'

const App = () => {
	return(
		<>	
			<LoadingBar className="loader" progressIncrease={40}  showFastActions />
			<MainRoutes />
		</>
	)
}

export default App

