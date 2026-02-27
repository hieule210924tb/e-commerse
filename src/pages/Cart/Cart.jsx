import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import Content from '@/pages/Cart/components/contents/Content';
import Step from '@/pages/Cart/components/steps/Step';
import styles from './Cart.module.scss';
import MainLayout from '@components/Layout/Layout';
import { useState } from 'react';
function Cart() {
    const { container } = styles;
    const [currentStep, setCurrentStep] = useState(1);

    const handleRenderContent = () => {
        switch (currentStep) {
            case 1:
                return <Content />;
            case 2:
                return <h1>2</h1>;
            case 3:
                return <h1>3</h1>;
        }
    };
    return (
        <>
            <MyHeader />
            <div className={container}>
                <Step
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
                <MainLayout>{handleRenderContent()}</MainLayout>
            </div>
            <MyFooter />
        </>
    );
}

export default Cart;
