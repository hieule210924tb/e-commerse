import styles from './ProductItem.module.scss';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
function ProductItem({ src, prevSrc, name, price }) {
    const {
        boxImg,
        showImgHover,
        showFncHover,
        boxIcon,
        title,
        priceProduct,
        container,
    } = styles;
    return (
        <div className={container}>
            <div className={boxImg}>
                <img src={src} alt={name} />
                <img className={showImgHover} src={prevSrc} alt={name} />
                <div className={showFncHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reLoadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={eyeIcon} alt='' />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceProduct}> ${price}</div>
        </div>
    );
}

export default ProductItem;
