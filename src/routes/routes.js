import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/Home/Home')),
    },
    {
        path: '/blog',
        component: lazy(() => import('@components/Home/Home')),
    },
    {
        path: '/shop',
        component: lazy(() => import('@pages/OurShop/OurShop')),
    },
    {
        path: '/cart',
        component: lazy(() => import('@pages/Cart/Cart')),
    },
    {
        path: '/product/:id',
        component: lazy(() => import('@pages/DetailProduct/index')),
    },
];
export default routers;
