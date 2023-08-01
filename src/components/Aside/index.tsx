import React, { useState } from 'react'
import logoImg from '../../assets/logo.svg'

import {
	MdDashboard,
	MdArrowDownward,
	MdArrowUpward,
	MdExitToApp,
	MdClose,
	MdMenu
} from 'react-icons/md'

import {
	Container,
	Header,
	LogImg,
	Title,
	MenuContainer,
	MenuItemLink,
	MenuItemButton,
	ToggleMenu,
	ThemeToggleFooter
} from './style'
import Toggle from '../Toggle'
import { useTheme } from '../../hooks/theme'

const Aside: React.FC = () => {
	const { toggleTheme, theme } = useTheme()

	const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false)
	const [darkTheme, setDarkTheme] = useState(() =>
		theme.title === 'dark' ? true : false
	)

	const handleToggleMenu = () => {
		setToggleMenuIsOpened(!toggleMenuIsOpened)
	}

	const handleChangeTheme = () => {
		setDarkTheme(!darkTheme)
		toggleTheme()
	}

	return (
		<Container $menuIsOpen={toggleMenuIsOpened}>
			<Header>
				<ToggleMenu onClick={handleToggleMenu}>
					{toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
				</ToggleMenu>

				<LogImg src={logoImg} alt="Logo Energy Bill" />
				<Title>Energy Bill</Title>
			</Header>

			<MenuContainer>
				<MenuItemLink href="/">
					<MdDashboard />
					Dashboard
				</MenuItemLink>

				<MenuItemLink href="/list/entry-balance">
					<MdArrowUpward />
					Historico
				</MenuItemLink>

				<MenuItemLink href="/list/exit-balance">
					<MdArrowDownward />
					Saídas
				</MenuItemLink>

				<MenuItemButton>
					<MdExitToApp />
					Sair
				</MenuItemButton>
			</MenuContainer>

			<ThemeToggleFooter $menuIsOpen={toggleMenuIsOpened}>
				<Toggle
					labelLeft="Light"
					labelRight="Dark"
					checked={darkTheme}
					onChange={handleChangeTheme}
				/>
			</ThemeToggleFooter>
		</Container>
	)
}

export default Aside
