import HeaderSideBar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSideBar';
import { PiShoppingCartLight } from 'react-icons/pi';
import styles from './Cart.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
function Cart() {
    const { container, total, boxBtn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    title={'CART'}
                    icon={<PiShoppingCartLight style={{ fontSize: 30 }} />}
                />
                <ItemProduct />
            </div>
            <div>
                <div className={total}>
                    <p>SUBTOTAL: </p>
                    <p>$199.99</p>
                </div>
                <div className={boxBtn}>
                    <Button content='VIEW CART' />
                    <Button content='CHECKOUT' isPrimary={false} />
                </div>
            </div>
        </div>
    );
}

export default Cart;
