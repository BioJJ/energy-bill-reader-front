import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'

import formatCurrency from '../../utils/formatCurrency'
import listOfMonths from '../../utils/months'

import { useBill } from './hooks/useBill'
import Layout from '../../components/Layout'

import { Container, Content } from './style'

const List: React.FC = () => {
	const [monthSelected, setMonthSelected] = useState<number>(
		new Date().getMonth() + 1
	)
	const [yearSelected, setYearSelected] = useState<number>(
		new Date().getFullYear()
	)

	const { billsFiltered } = useBill()

	const params = useParams()
	const movimentType = params.type

	const pageData = useMemo(() => {
		return movimentType === 'entry-balance'
			? {
					title: 'Historico',
					lineColor: '#4E41F0'
			  }
			: {
					title: 'Saídas',
					lineColor: '#E44C4E'
			  }
	}, [movimentType])

	const years = useMemo(() => {
		const uniqueYears: number[] = []

		billsFiltered.forEach((item) => {
			const date = new Date(item.expirationDate)
			const year = date.getFullYear()

			if (!uniqueYears.includes(year)) {
				uniqueYears.push(year)
			}
		})

		return uniqueYears.map((year) => {
			return {
				value: year,
				label: year
			}
		})
	}, [billsFiltered])

	const months = useMemo(() => {
		return listOfMonths.map((month, index) => {
			return {
				value: index + 1,
				label: month
			}
		})
	}, [])

	const handleMonthSelected = (month: string) => {
		try {
			const parseMonth = Number(month)
			setMonthSelected(parseMonth)
		} catch {
			throw new Error('invalid month value. Is accept 0 - 24.')
		}
	}

	const handleYearSelected = (year: string) => {
		try {
			const parseYear = Number(year)
			setYearSelected(parseYear)
		} catch {
			throw new Error('invalid year value. Is accept integer numbers.')
		}
	}

	return (
		<Layout>
			<Container>
				<ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
					<SelectInput
						options={months}
						onChange={(e) => handleMonthSelected(e.target.value)}
						defaultValue={monthSelected}
					/>
					<SelectInput
						options={years}
						onChange={(e) => handleYearSelected(e.target.value)}
						defaultValue={yearSelected}
					/>
				</ContentHeader>

				<Content>
					{billsFiltered.map((item) => (
						<HistoryFinanceCard
							key={item.id}
							tagColor={'#4E41F0'}
							title={item.monthReference}
							subtitle={item.expirationDate}
							amount={formatCurrency(Number(item.totalValue))}
						/>
					))}
				</Content>
			</Container>
		</Layout>
	)
}

export default List
