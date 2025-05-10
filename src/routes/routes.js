import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/Home/Home')),
    },
    //   {
    //     path: '/blog',
    //     component :() =>import('@components/Home/Home')
    // },
];
export default routers;
