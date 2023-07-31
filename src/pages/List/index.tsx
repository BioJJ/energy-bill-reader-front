import React from 'react'
import { Container } from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

const List: React.FC = () => {
	const options = [{ value: 'jefferson', label: 'jefferson' }]

	const handleMonthSelected = (month: string) => {
		console.log(month)
	}
	return (
		<Container>
			<ContentHeader title={'historico'} lineColor={'#4E41F0'}>
				<SelectInput
					options={options}
					onChange={(e) => handleMonthSelected(e.target.value)}
					defaultValue={1}
				/>
				{/* <SelectInput
					options={years}
					onChange={(e) => handleYearSelected(e.target.value)}
					defaultValue={yearSelected}
				/> */}
			</ContentHeader>
		</Container>
	)
}

export default List
