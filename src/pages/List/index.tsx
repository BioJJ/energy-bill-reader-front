import React, { useState } from 'react'
import { Container, Content, Filters } from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'

const List: React.FC = () => {
	const [frequencyFilterSelected, setFrequencyFilterSelected] = useState([
		'pendente',
		'pagas'
	])
	const months = [
		{ value: 7, label: 'Julho' },
		{ value: 8, label: 'Agosto' },
		{ value: 9, label: 'Setembro' }
	]

	const years = [
		{ value: 2018, label: '2018' },
		{ value: 2019, label: '2019' },
		{ value: 2020, label: '2020' }
	]

	const handleMonthSelected = (month: string) => {
		console.log(month)
	}

	const handleFrequencyClick = (frequency: string) => {
		console.log(frequency)
	}
	return (
		<Container>
			<ContentHeader title={'historico'} lineColor={'#4E41F0'}>
				<SelectInput
					options={months}
					onChange={(e) => handleMonthSelected(e.target.value)}
					defaultValue={1}
				/>

				<SelectInput
					options={years}
					onChange={(e) => handleMonthSelected(e.target.value)}
					defaultValue={1}
				/>
			</ContentHeader>

			<Filters>
				<button
					type="button"
					className={`
                    tag-filter 
                    tag-filter-recurrent
                    ${
											frequencyFilterSelected.includes('pagas') && 'tag-actived'
										}`}
					onClick={() => handleFrequencyClick('pagas')}
				>
					Pagas
				</button>

				<button
					type="button"
					className={`
                    tag-filter 
                    tag-filter-eventual
                    ${
											frequencyFilterSelected.includes('pendente') &&
											'tag-actived'
										}`}
					onClick={() => handleFrequencyClick('pendente')}
				>
					Pendentes
				</button>
			</Filters>

			<Content>
				<HistoryFinanceCard
					tagColor="#623133"
					title="Conta de luz"
					subtitle="27/08/2023"
					amount="R$ 700,00"
				/>
			</Content>
		</Container>
	)
}

export default List
