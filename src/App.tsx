import React, { useEffect } from 'react'

import type { Router as RemixRouter } from '@remix-run/router'
import {
	createBrowserRouter,
	RouteObject,
	RouterProvider
} from 'react-router-dom'
import { useNotification } from './hooks/useNotification'

import { loginRoutes } from './pages/Signin/routes'
import { dashboardRoutes } from './pages/Dashboard/routes'
import { listRoutes } from './pages/List/routes'

import { ThemeProvider } from 'styled-components'
import { useTheme } from './hooks/theme'

import GlobalStyles from './styles/styles'
import {
	getAuthorizationToken,
	verifyLoggedIn
} from './functions/connections/auth'
import { useGlobalReducer } from './store/reducers/globalReducer/useGlobalReducer'
import { useRequests } from './hooks/auth'
import { URL_USER } from './constants/urls'
import { MethodsEnum } from './enums/methods.enum'
// import Routes from './routes'

const routes: RouteObject[] = [...loginRoutes]
const routesLoggedIn: RouteObject[] = [...dashboardRoutes, ...listRoutes].map(
	(route) => ({
		...route,
		loader: verifyLoggedIn
	})
)

const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn])

const App: React.FC = () => {
	const { theme } = useTheme()
	const { contextHolder } = useNotification()

	// useEffect(() => {
	// 	const token = getAuthorizationToken()
	// 	if (token) {
	// 		request(URL_USER, MethodsEnum.GET, setUser)
	// 	}
	// }, [])

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{contextHolder}
			<RouterProvider router={router} />
			{/* <Routes /> */}
		</ThemeProvider>
	)
}

export default App
