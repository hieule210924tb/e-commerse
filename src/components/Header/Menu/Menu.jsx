import styles from '../Header.module.scss';
function Menu({ content, setIsOpen }) {
    const { menu } = styles;
    return (
        <div className={menu} onClick={() => setIsOpen(true)}>
            {content}
        </div>
    );
}

export default Menu;
