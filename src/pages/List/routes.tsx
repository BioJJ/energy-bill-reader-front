import { RouteObject } from 'react-router-dom'

import List from './'

export enum DashboardRoutesEnum {
	LIST = '/list/:type'
}

export const listRoutes: RouteObject[] = [
	{
		path: DashboardRoutesEnum.LIST,
		element: <List />
	}
]
