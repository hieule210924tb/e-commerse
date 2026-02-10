import React, { useContext } from 'react';
import CartTable from '@/pages/Cart/components/contents/CartTable';
import styles from '../../Cart.module.scss';
import CartSummary from '@/pages/Cart/components/contents/CartSummary';
import Button from '@components/Button/Button';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { addProductToCart } from '@/apis/cartService';
import { deleteItem } from '@/apis/cartService';
import { deleteCart } from '@/apis/cartService';
import { useNavigate } from 'react-router-dom';
import { PiShoppingCartLight } from 'react-icons/pi';
const Content = () => {
    const {
        containerContents,
        boxBtnDelete,
        boxFooter,
        boxCoupon,
        boxEmptyCart,
        titleEmpty,
        boxBtnEmpty,
    } = styles;
    const {
        listProductCart,
        handleGetListProductsCart,
        isLoading,
        setIsLoading,
        userId,
    } = useContext(SideBarContext);
    const navigate = useNavigate();
    const handleReplaceQuantity = (data) => {
        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                handleGetListProductsCart(data.userId, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };
    const handleDeleteItemCart = (data) => {
        setIsLoading(true);
        deleteItem(data)
            .then((res) => {
                handleGetListProductsCart(data.userId, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };
    const handleDeleteCart = () => {
        setIsLoading(true);
        deleteCart({ userId })
            .then((res) => {
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleNavigateToShop = () => {
        navigate('/shop');
    };

    return (
        <>
            {listProductCart.length > 0 && userId ? (
                <div className={containerContents}>
                    <div
                        style={{
                            width: '58%',
                        }}
                    >
                        <CartTable
                            listProductCart={listProductCart}
                            getData={handleReplaceQuantity}
                            isLoading={isLoading}
                            getDataDelete={handleDeleteItemCart}
                        />
                        <div className={boxFooter}>
                            <div className={boxCoupon}>
                                <input type='text' placeholder='Coupon code' />
                                <Button content={'OK'} isPriamry={false} />
                            </div>
                            <div className={boxBtnDelete}>
                                <Button
                                    content={
                                        <div>&#128465; CLEAR SHOPPING CART</div>
                                    }
                                    isPriamry={false}
                                    onClick={handleDeleteCart}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            width: '40%',
                        }}
                    >
                        <CartSummary />
                    </div>
                </div>
            ) : (
                <div className={boxEmptyCart}>
                    <PiShoppingCartLight
                        style={{
                            fontSize: '50px',
                        }}
                    />
                    <div className={titleEmpty}>
                        YOUR SHOPPING CART IS EMPTY
                    </div>
                    <div>
                        We invite you to get acquainted with an assortment of
                        our shop. Surely you can find something for yourself!
                    </div>
                    <div className={boxBtnEmpty}>
                        <Button
                            content={'RETURN TO SHOP'}
                            onClick={handleNavigateToShop}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Content;
