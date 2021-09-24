import { Users } from 'pages/Users/index';

export enum Routes {
    USERS = '/users',
    PROFILE = '/profile',
}

export const routesArr:Route[] = [
    {
        path: Routes.USERS,
        component: Users
    }
]

interface Route {
    path: Routes
    exact?: boolean
    component: React.ComponentType
}