import React from 'react'
import { Routes, Route } from 'react-router-dom'

import SignIn from '../pages/Signin'

export enum LoginRoutesEnum {
	LOGIN = '/'
}

const AuthRoutes: React.FC = () => (
	<Routes>
		<Route path="/" element={<SignIn />} />
	</Routes>
)

export default AuthRoutes
