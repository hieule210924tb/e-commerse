import styles from './ProductItem.module.scss';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomePage = true,
}) {
    // const { isShowGrid } = useContext(OurShopContext);
    // const [sizeChoose, isSizeChoose] = useState('')
    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const {
        boxImg,
        showImgHover,
        showFncHover,
        boxIcon,
        title,
        priceProduct,
        containerItem,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        leftBtn,
        largeImg,
    } = styles;
    useEffect(() => {
        if (isHomePage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomePage, ourShopStore?.isShowGrid]);
    return (
        <div className={isShowGrid ? '' : containerItem}>
            <div className={cls(boxImg, { [largeImg]: !isShowGrid })}>
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
            <div className={isShowGrid ? '' : content}>
                {!isHomePage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => (
                            <div className={size} key={index}>
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}
                <div
                    className={cls(title, {
                        [textCenter]: !isHomePage,
                    })}
                >
                    {name}
                </div>
                {!isHomePage && (
                    <div className={textCenter} style={{ color: '#c1c1c1' }}>
                        Brand 01
                    </div>
                )}
                <div
                    className={cls(priceProduct, { [textCenter]: !isHomePage })}
                    style={{ color: isHomePage ? '#888' : '#c1c1c1' }}
                >
                    {' '}
                    ${price}
                </div>
                {!isHomePage && (
                    <div
                        className={cls(boxBtn, {
                            [leftBtn]: !isShowGrid,
                        })}
                    >
                        <Button content={'ADD TO CART'} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
