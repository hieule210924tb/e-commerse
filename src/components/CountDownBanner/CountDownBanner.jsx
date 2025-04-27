import CountDownTime from '@components/CountDownTime/CountDownTime';
import styles from './CountDownBanner.module.scss';
import Button from '@components/Button/Button';

function CountDownBanner() {
    const { container, containerTimer, title, boxBtn } = styles;
    const targetDate = '2025-12-31T00:00:00';
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountDownTime targetDate={targetDate} />
            </div>
            <p className={title}>The Classics Make A Comeback</p>
            <div className={boxBtn}>
                <Button content='Buy Now' />
            </div>
        </div>
    );
}

export default CountDownBanner;
