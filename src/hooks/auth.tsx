import React, { createContext, useState, useContext, ReactNode } from 'react'

interface ContentProps {
	children: ReactNode
}
interface IAuthContext {
	logged: boolean
	signIn(email: string, password: string): void
	signOut(): void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FunctionComponent<ContentProps> = ({ children }) => {
	const [logged, setLogged] = useState<boolean>(() => {
		const isLogged = localStorage.getItem('@energy-bill:logged')

		return !!isLogged
	})

	const signIn = (email: string, password: string) => {
		if (email === 'freddinho@gmail.com' && password === 'Freddinho@2023') {
			localStorage.setItem('@energy-bill:logged', 'true')
			setLogged(true)
		} else {
			alert('Senha ou usuário inválidos!')
		}
	}

	const signOut = () => {
		localStorage.removeItem('@energy-bill:logged')
		setLogged(false)
	}

	return (
		<AuthContext.Provider value={{ logged, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	)
}

function useAuth(): IAuthContext {
	const context = useContext(AuthContext)

	return context
}

export { AuthProvider, useAuth }
