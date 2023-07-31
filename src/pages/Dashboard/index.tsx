import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import { Container } from './style'
import SelectInput from '../../components/SelectInput'

const Dashboard: React.FC = () => {
	const options = [{ value: 'jefferson', label: 'jefferson' }]

	const handleMonthSelected = (month: string) => {
		console.log(month)
	}

	return (
		<Container>
			<ContentHeader title="Dashboard" lineColor="#F7931B">
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

export default Dashboard
