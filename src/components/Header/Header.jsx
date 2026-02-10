import BoxIcon from '@components/Header/BoxIcon/BoxIcon';
import styles from './Header.module.scss';
import { dataBoxIcon, dataMenu } from '@components/Header/BoxIcon/constant';
import Menu from '@components/Header/Menu/Menu';
import Logo from '@icons/images/Logo-retina.webp';
import { IoIosHeartEmpty } from 'react-icons/io';
import { TfiReload } from 'react-icons/tfi';
import { PiShoppingCart } from 'react-icons/pi';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProvider';
function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        logoImg,
        container,
        topHeader,
        fixedHeader,
        boxCart,
        quantity,
    } = styles;
    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const {
        setIsOpen,
        setType,
        listProductCart,
        userId,
        handleGetListProductsCart,
    } = useContext(SideBarContext);
    const { userInfo } = useContext(StoreContext);
    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };
    const handleOpenCartSideBar = () => {
        handleGetListProductsCart(userId, 'cart');
        handleOpenSideBar('cart');
    };
    const totalItemCart = listProductCart.length
        ? listProductCart.reduce((acc, item) => {
              return (acc += item.quantity);
          }, 0)
        : 0;
    useEffect(() => {
        scrollPosition > 90 ? setFixedPosition(true) : setFixedPosition(false);
    }, [scrollPosition]);
    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition,
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item, index) => (
                            <BoxIcon
                                key={index}
                                type={item.type}
                                href={item.href}
                            />
                        ))}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item, index) => (
                            <Menu
                                content={item.content}
                                key={index}
                                href={item.href}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <img className={logoImg} src={Logo} alt='Marseille' />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu
                            .slice(3, dataMenu.length)
                            .map((item, index) => (
                                <Menu
                                    content={item.content}
                                    key={index}
                                    href={item.href}
                                />
                            ))}
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{ fontSize: '20' }}
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <IoIosHeartEmpty
                            style={{ fontSize: '24' }}
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <div className={boxCart}>
                            <PiShoppingCart
                                style={{
                                    fontSize: '25px',
                                }}
                                onClick={() => handleOpenCartSideBar()}
                            />
                            <div className={quantity}>
                                {totalItemCart ||
                                    userInfo?.amountCart ||
                                    0}{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
