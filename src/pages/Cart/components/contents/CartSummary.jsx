import React from 'react';
import styles from '../../Cart.module.scss';
import Button from '@components/Button/Button';
import cls from 'classnames';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';

const CartSummary = () => {
    const {
        containerSummary,
        title,
        boxTotal,
        price,
        subTotal,
        totals,
        space,
        containerRight,
    } = styles;

    return (
        <>
            <div className={containerRight}>
                <div className={containerSummary}>
                    <div className={title}>CART TOTALS</div>

                    <div className={cls(boxTotal, subTotal)}>
                        <div>Subtotal</div>
                        <div className={price}>5000</div>
                    </div>

                    <div className={cls(boxTotal, totals)}>
                        <div>TOTAL</div>
                        <div>500</div>
                    </div>

                    <Button content={'PROCEED TO CHECKOUT'} />
                    <div className={space} />
                    <Button content={'CONTINUE SHOPPING'} isPriamry={false} />
                </div>
            </div>
            <PaymentMethods />
        </>
    );
};

export default CartSummary;
