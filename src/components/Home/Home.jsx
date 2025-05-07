import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import AdvanceHeadline from '@components/AdvanceHeadline/AdvanceHeadline';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
function Home() {
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        getProducts().then((res) => {
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
                {/* <SaleHomePage /> */}
            </div>
        </div>
    );
}

export default Home;
