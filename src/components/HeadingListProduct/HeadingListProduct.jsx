import CountDownTime from '@components/CountDownTime/CountDownTime';
import MainLayout from '@components/Layout/Layout';
import styles from './HeadingListProduct.module.scss';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';

function HeadingListProduct() {
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountDownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;
