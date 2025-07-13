import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import AdvanceHeadline from '@components/AdvanceHeadline/AdvanceHeadline';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import MyFooter from '@components/Footer/Footer';
function Home() {
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        const query = {
            sortType: 0,
            page: 1,
            limit: 10,
        };
        getProducts(query).then((res) => {
            setListProduct(res.contents);
        });
    }, []);
    return (
        <div>
            <div>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadline />
                <HeadingListProduct data={listProduct.slice(0, 2)} />
                <PopularProduct
                    data={listProduct.slice(2, listProduct.length)}
                />
                <SaleHomePage />
                <MyFooter />
            </div>
        </div>
    );
}

export default Home;
