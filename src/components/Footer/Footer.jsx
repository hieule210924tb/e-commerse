import styles from './Footer.module.scss';
import { dataMenu } from '@components/Footer/constant';
function MyFooter() {
    const { container, boxNav } = styles;
    return (
        <div className={container}>
            <div>
                <img
                    width={160}
                    height={55}
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png'
                    alt=''
                />
            </div>
            <div className={boxNav}>
                {dataMenu.map((item, index) => (
                    <div key={index}>{item.content}</div>
                ))}
            </div>
            <div>
                <p>Guaranteed safe ckeckout </p>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png'
                    alt=''
                />
            </div>
            <div>
                <p>
                    Copyright © 2024 XStore Hieu. Created by 8Hieu – WordPress
                    WooCommerce Hieus.
                </p>
            </div>
        </div>
    );
}

export default MyFooter;
