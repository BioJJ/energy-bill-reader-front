import React from 'react'

import App from './app.routes'

const Routes: React.FC = () => {
	// const { logged } = useAuth()

	return (
		// <BrowserRouter>
		//     { logged ? <App/> : <Auth /> }
		// </BrowserRouter>
		<App />
	)
}

export default Routes
