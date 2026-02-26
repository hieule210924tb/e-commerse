import styles from './ProductItem.module.scss';
import { CiHeart } from 'react-icons/ci';
import { LiaEyeSolid, LiaShoppingBagSolid } from 'react-icons/lia';
import { TfiReload } from 'react-icons/tfi';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { useNavigate } from 'react-router-dom';
import { handleAddProductToCartCommon } from '@/utils/helper';
function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomePage = true,
    slideItem = false,
}) {
    // const { isShowGrid } = useContext(OurShopContext);
    const [sizeChoose, setSizeChoose] = useState('');
    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetListProductsCart, setDetailProduct } =
        useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
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
        isActiveSize,
        btnClear,
    } = styles;
    const navigate = useNavigate();
    const handleChooseSize = (size) => {
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose('');
    };
    const handleAddToCart = () => {
        handleAddProductToCartCommon(
            userId,
            setIsOpen,
            setType,
            toast,
            sizeChoose,
            details._id,
            1,
            setIsLoading,
            handleGetListProductsCart,
        );
    };
    const handleShowDetailProductSideBar = () => {
        setIsOpen(true);
        setType('detail');
        setDetailProduct(details);
    };
    const handleNavigateToDetail = () => {
        const path = `/product/${details._id}`;
        navigate(path);
    };
    useEffect(() => {
        if (isHomePage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomePage, ourShopStore?.isShowGrid]);
    useEffect(() => {
        if (slideItem) {
            setIsShowGrid(true);
        }
    }, [slideItem]);
    return (
        <div
            className={isShowGrid ? '' : containerItem}
            style={{ cursor: 'pointer' }}
        >
            <div
                className={cls(boxImg, { [largeImg]: !isShowGrid })}
                onClick={handleNavigateToDetail}
            >
                <img src={src} alt={name} />
                <img className={showImgHover} src={prevSrc} alt={name} />
                <div className={showFncHover}>
                    <div className={boxIcon}>
                        <LiaShoppingBagSolid
                            style={{
                                fontSize: '20px',
                            }}
                        />
                    </div>
                    <div className={boxIcon}>
                        <CiHeart
                            style={{
                                fontSize: '25px',
                            }}
                        />
                    </div>
                    <div className={boxIcon}>
                        <TfiReload
                            style={{
                                fontSize: '20px',
                            }}
                        />
                    </div>
                    <div
                        className={boxIcon}
                        onClick={handleShowDetailProductSideBar}
                    >
                        <LiaEyeSolid
                            style={{
                                fontSize: '23px',
                            }}
                        />
                    </div>
                </div>
            </div>
            <div
                className={isShowGrid ? '' : content}
                style={{ marginTop: slideItem && '10px' }}
            >
                {!isHomePage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => (
                            <div
                                className={cls(size, {
                                    [isActiveSize]: sizeChoose === item.name,
                                })}
                                key={index}
                                onClick={() => handleChooseSize(item.name)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}
                {sizeChoose && (
                    <div className={btnClear} onClick={() => handleClearSize()}>
                        Clear
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
                        <Button
                            content={
                                isLoading ? (
                                    <LoadingTextCommon />
                                ) : (
                                    'ADD TO CART'
                                )
                            }
                            onClick={handleAddToCart}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
