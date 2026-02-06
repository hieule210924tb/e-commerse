import { deleteItem } from '@/apis/cartService';
import styles from './ItemProduct.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
function ItemProduct({
    src,
    nameProduct,
    priceProduct,
    skuProduct,
    sizeProduct,
    quantity,
    productId,
    userId,
    overlayLoading,
}) {
    const { boxContent, container, title, price, boxClose, size } = styles;
    const [isDelete, setIsDelete] = useState(false);
    const { handleGetListProductsCart } = useContext(SideBarContext);
    const handleRemoveItem = () => {
        setIsDelete(true);
        deleteItem({ productId, userId })
            .then((res) => {
                setIsDelete(false);
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((err) => {
                setIsDelete(false);
                console.log(err);
            });
    };
    return (
        <div className={container}>
            <img src={src} alt='' />
            <div className={boxClose}>
                <IoCloseOutline
                    onClick={handleRemoveItem}
                    style={{
                        fontSize: '25px',
                        color: 'c1c1c1',
                    }}
                />
            </div>
            <div className={boxContent}>
                <div style={{ width: 160 }}>
                    <div className={title}>{nameProduct}</div>
                </div>
                <div className={size}>Size:{sizeProduct}</div>
                <div className={price}>
                    {quantity} x ${priceProduct}
                </div>
                <div className={price}>SKU: {skuProduct}</div>
                {isDelete && (
                    <div className={overlayLoading}>
                        <LoadingTextCommon />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemProduct;
