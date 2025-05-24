import styles from './ItemProduct.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
function ItemProduct() {
    const { boxContent, container, title, price, boxClose, size } = styles;
    return (
        <div className={container}>
            <img
                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg'
                alt=''
            />
            <div className={boxClose}>
                <IoCloseOutline
                    style={{
                        fontSize: '25px',
                        color: 'clclcl',
                    }}
                />
            </div>
            <div className={boxContent}>
                <div style={{ width: 160 }}>
                    <div className={title}>Consectetur nibh at vance</div>
                </div>
                <div className={size}>Size:M</div>
                <div className={price}>$119.99</div>
                <div className={price}>SKU: 12345</div>
            </div>
        </div>
    );
}

export default ItemProduct;
