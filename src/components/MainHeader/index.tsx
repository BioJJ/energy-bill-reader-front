import React, { useMemo } from 'react'
import emojis from '../../utils/emoji'

import Toggle from '../Toggle'

import { Container, Profile, Welcome, UserName } from './style'

const MainHeader: React.FC = () => {
	const emoji = useMemo(() => {
		const indice = Math.floor(Math.random() * emojis.length)
		return emojis[indice]
	}, [])

	return (
		<Container>
			<Toggle
				labelLeft="Light"
				labelRight="Dark"
				checked={false}
				onChange={() => console.log('mudou')}
			/>

			<Profile>
				<Welcome>Olá, {emoji} </Welcome>
				<UserName>Jefferson Coelho</UserName>
			</Profile>
		</Container>
	)
}

export default MainHeader
