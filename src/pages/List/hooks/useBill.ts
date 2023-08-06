import { useEffect, useState } from 'react'

import { URL_BILL } from '../../../constants/urls'
import { MethodsEnum } from '../../../enums/methods.enum'
import { useRequests } from '../../../hooks/auth'
import { BillType } from '../../../types/BillType'
import { useBillReducer } from '../../../store/reducers/billReducer/useBillReducer'

export const useBill = () => {
	const { bills, setBills } = useBillReducer()
	const [billsFiltered, setBillsFiltered] = useState<BillType[]>([])
	const { request } = useRequests()

	useEffect(() => {
		setBillsFiltered([...bills])
	}, [bills])

	useEffect(() => {
		request<BillType[]>(URL_BILL, MethodsEnum.GET, setBills)
	}, [])

	return {
		billsFiltered
	}
}
