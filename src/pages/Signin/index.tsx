import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { useRequests } from '../../hooks/auth'

import { Container, Logo, Form, FormTitle } from './style'

const SignIn: React.FC = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const { authRequest, loading } = useRequests()

	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

	const handleLogin = () => {
		authRequest(navigate, {
			email: email,
			password: password
		})
	}

	return (
		<Container>
			<Logo>
				<img src={logoImg} alt="Energy Bill" />
				<h2>Minha Carteira</h2>
			</Logo>

			<Form>
				<FormTitle>Entrar</FormTitle>

				<Input
					type="email"
					placeholder="e-mail"
					required
					onChange={handleEmail}
				/>
				<Input
					type="password"
					placeholder="senha"
					required
					onChange={handlePassword}
				/>

				<Button
					loading={loading}
					type="primary"
					margin="30px 0px 16px 0px"
					onClick={handleLogin}
				>
					Acessar
				</Button>
			</Form>
		</Container>
	)
}

export default SignIn
