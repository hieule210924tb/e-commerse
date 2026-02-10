import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import styles from '../Cart.module.scss';

function LoadingCart() {
    const { loadingCart } = styles;
    return (
        <div className={loadingCart}>
            <LoadingTextCommon />
        </div>
    );
}

export default LoadingCart;
