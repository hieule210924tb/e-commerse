import CountDownTime from '@components/CountDownTime/CountDownTime';
import styles from '../OurShop.module.scss';
import Button from '@components/Button/Button';
function Banner() {
    const { containerBanner, contentBox, title, boxBtn, countdownBox } = styles;
    const targetDate = '2025-12-31T00:00:00';
    return (
        <>
            <div className={containerBanner}>
                <div className={contentBox}>
                    <div className={countdownBox}>
                        <CountDownTime targetDate={targetDate} />
                    </div>
                    <div className={title}>The Classics Make A Comeback</div>
                    <div className={boxBtn}>
                        <Button content={'Buy Now'} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
