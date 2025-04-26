import BoxIcon from '@components/Header/BoxIcon/BoxIcon';
import styles from './Header.module.scss';
import { dataBoxIcon, dataMenu } from '@components/Header/BoxIcon/constant';
import Menu from '@components/Header/Menu/Menu';
import Logo from '@icons/images/Logo-retina.webp';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        logoImg,
        imgIcon,
        container,
    } = styles;
    return (
        <div className={container}>
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
                        <img
                            className={imgIcon}
                            src={reLoadIcon}
                            alt='re-load'
                        />
                        <img className={imgIcon} src={heartIcon} alt='heart' />
                        <img className={imgIcon} src={cartIcon} alt='cart' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
