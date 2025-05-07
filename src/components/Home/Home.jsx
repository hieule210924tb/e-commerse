import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import AdvanceHeadline from '@components/AdvanceHeadline/AdvanceHeadline';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import { useEffect } from 'react';
import { getProducts } from '@/apis/productsService';
function Home() {
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            <div>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadline />
                <HeadingListProduct />
                <SaleHomePage />
            </div>
        </div>
    );
}

export default Home;
