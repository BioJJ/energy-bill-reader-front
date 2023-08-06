import { RouteObject } from 'react-router-dom'

import List from './'

export enum EnergyBillRoutesEnum {
	LIST = '/list/:type',
	BILL_LIST = '/energy-bill',
	BILL_INSERT = '/energy-bill/parse-create',
	BILL_EDIT = '/energy-bill/:billId'
}

export const listRoutes: RouteObject[] = [
	{
		path: EnergyBillRoutesEnum.LIST,
		element: <List />
	}
]
