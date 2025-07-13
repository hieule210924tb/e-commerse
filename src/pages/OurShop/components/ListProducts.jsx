import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';

function ListProduct() {
    // const { products } = useContext(OurShopContext);
    // console.log(products);
    return (
        <>
            <MainLayout>product</MainLayout>
        </>
    );
}

export default ListProduct;
