import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './OurShop.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@/pages/OurShop/components/Banner';
function OurShop() {
    const { container, functionBox, specialText, btnBack } = styles;
    const navigate = useNavigate();
    const handleBackPreviousPage = () => {
        navigate(-1); //navigate -1 là back lại trang trước đó
    };
    return (
        <div>
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
            </MainLayout>
        </div>
    );
}

export default OurShop;
