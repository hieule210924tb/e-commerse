import React from 'react';
import CartTable from '@/pages/Cart/components/contents/CartTable';
import styles from '../../Cart.module.scss';
import CartSummary from '@/pages/Cart/components/contents/CartSummary';
const Content = () => {
    const { containerContents } = styles;
    return (
        <div className={containerContents}>
            <div
                style={{
                    width: '58%',
                }}
            >
                <CartTable />
            </div>
            <div
                style={{
                    width: '40%',
                }}
            >
                <CartSummary />
            </div>
        </div>
    );
};

export default Content;
