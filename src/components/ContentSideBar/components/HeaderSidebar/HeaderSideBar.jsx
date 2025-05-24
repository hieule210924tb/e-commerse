import styles from './HeaderSideBar.module.scss';

function HeaderSideBar({ icon, title }) {
    const { container, iconSideBar, titleSideBar } = styles;
    return (
        <div className={container}>
            <div className={iconSideBar}>{icon}</div>
            <div className={titleSideBar}>{title}</div>
        </div>
    );
}

export default HeaderSideBar;
