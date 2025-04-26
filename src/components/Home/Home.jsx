import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './Home.module.scss';
function Home() {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
            </div>
        </div>
    );
}

export default Home;
