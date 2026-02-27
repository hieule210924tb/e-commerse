import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import Step from '@/pages/Cart/components/steps/Step';
import styles from './Cart.module.scss';
import MainLayout from '@components/Layout/Layout';
import { StepperProvider } from '@/contexts/SteperProvider';
import ContentStep from '@/pages/Cart/components/ContentStep';
function Cart() {
    const { container } = styles;

    return (
        <StepperProvider>
            <MyHeader />
            <div className={container}>
                <Step />
                <MainLayout>
                    <ContentStep />
                </MainLayout>
            </div>
            <MyFooter />
        </StepperProvider>
    );
}

export default Cart;
