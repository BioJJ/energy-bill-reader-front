import { useState } from 'react'
import { NavigateFunction } from 'react-router-dom'

import { DashboardRoutesEnum } from '../routes/app.routes'
import { AuthType } from '../types/AuthType'
import { useGlobalReducer } from '../store/reducers/globalReducer/useGlobalReducer'
import { ERROR_INVALID_PASSWORD } from '../constants/errorStatus'
import { URL_AUTH } from '../constants/urls'
import { setAuthorizationToken } from '../functions/connections/auth'
import ConnectionAPI, {
	connectionAPIPost,
	MethodType
} from '../functions/connections/connectionsAPI'

export const useRequests = () => {
	const [loading, setLoading] = useState(false)
	const { setNotification, setUser } = useGlobalReducer()

	const request = async <T>(
		url: string,
		method: MethodType,
		saveGlobal?: (object: T) => void,
		body?: unknown,
		message?: string
	): Promise<T | undefined> => {
		setLoading(true)

		const returnObject: T | undefined = await ConnectionAPI.connect<T>(
			url,
			method,
			body
		)
			.then((result) => {
				if (saveGlobal) {
					saveGlobal(result)
				}
				if (message) {
					setNotification('Sucesso!', 'success', message)
				}
				return result
			})
			.catch((error: Error) => {
				setNotification(error.message, 'error')
				return undefined
			})

		setLoading(false)

		return returnObject
	}

	const authRequest = async (
		navigate: NavigateFunction,
		body: unknown
	): Promise<void> => {
		setLoading(true)

		await connectionAPIPost<AuthType>(URL_AUTH, body)
			.then((result) => {
				setUser({
					id: result.sub,
					email: result.email,
					name: result.name
				})
				setAuthorizationToken(result.access_token)
				navigate(DashboardRoutesEnum.FIRST_SCREEN)
				return result
			})
			.catch(() => {
				setNotification(ERROR_INVALID_PASSWORD, 'error')
				return undefined
			})

		setLoading(false)
	}

	return {
		loading,
		authRequest,
		request
	}
}
