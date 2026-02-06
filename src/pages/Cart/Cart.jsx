import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import Content from '@/pages/Cart/components/contents/Content';
import Step from '@/pages/Cart/components/steps/Step';
import styles from './Cart.module.scss';
function Cart() {
    const { container } = styles;
    return (
        <>
            <MyHeader />
            <div className={container}>
                <Step />
                <Content />
            </div>
            <MyFooter />
        </>
    );
}

export default Cart;
