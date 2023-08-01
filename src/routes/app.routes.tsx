import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Dashboard from '../pages/Dashboard'
import List from '../pages/List'

const AppRoutes: React.FC = () => (
	<Layout>
		<Router>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/list/:type" element={<List />} />
			</Routes>
		</Router>
	</Layout>
)

export default AppRoutes
