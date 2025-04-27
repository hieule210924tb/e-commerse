import styles from './Layout.module.scss';
function MainLayout({ children }) {
    const { WrapLayout, container } = styles;
    return (
        <main className={WrapLayout}>
            <div className={container}>{children}</div>
        </main>
    );
}

export default MainLayout;
