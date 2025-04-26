// import { dataBoxIcon, dataMenu } from '@components/Header/BoxIcon/constant';
import styles from '../Header.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';
function BoxIcon({ type }) {
    const { boxIcon } = styles;
    const handleRenderIcon = () => {
        switch (type) {
            case 'Facebook':
                return fbIcon;
            case 'Instagram':
                return insIcon;
            case 'YouTobe':
                return ytbIcon;
        }
    };
    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIcon;
