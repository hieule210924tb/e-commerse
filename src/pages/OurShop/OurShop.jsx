import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './OurShop.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@/pages/OurShop/components/Banner';
import { OurShopProvider, OurShopContext } from '@/contexts/OurShopProvider';
import Filter from '@pages/OurShop/components/Filter';
import ListProduct from '@pages/OurShop/components/ListProducts';
function OurShop() {
    const { container, functionBox, specialText, btnBack } = styles;
    const navigate = useNavigate();
    // const { showOptions } = useContext(OurShopContext);
    const handleBackPreviousPage = () => {
        navigate(-1); //navigate -1 là back lại trang trước đó
    };
    return (
        <OurShopProvider>
            <MyHeader />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>
                            Home &gt; <span className={specialText}>Shop</span>
                        </div>
                        <div
                            className={btnBack}
                            onClick={() => handleBackPreviousPage()}
                        >
                            &lt; Return to previous page
                        </div>
                    </div>
                </div>
                <Banner />
                <div>
                    <Filter />
                    <ListProduct />
                </div>
            </MainLayout>
        </OurShopProvider>
    );
}

export default OurShop;
