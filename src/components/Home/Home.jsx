import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import AdvanceHeadline from '@components/AdvanceHeadline/AdvanceHeadline';
import Info from '@components/Info/Info';
import styles from './Home.module.scss';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
function Home() {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadline />
                <HeadingListProduct />
            </div>
        </div>
    );
}

export default Home;
