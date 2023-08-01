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
	ToggleMenu
} from './style'

const Aside: React.FC = () => {
	const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false)

	const handleToggleMenu = () => {
		setToggleMenuIsOpened(!toggleMenuIsOpened)
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
		</Container>
	)
}

export default Aside
