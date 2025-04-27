import styles from '../Info.module.scss';
import TruckIcon from '@icons/svgs/truckIcon.svg';
function InfoCard({ title, desc, src }) {
    const {
        containerCard,
        containerIcon,
        containerContent,
        titleContent,
        descContent,
    } = styles;
    return (
        <div className={containerCard}>
            <img className={containerIcon} src={src} alt='TruckIcon' />
            <div className={containerContent}>
                <div className={titleContent}>{title}</div>
                <div className={descContent}>{desc}</div>
            </div>
        </div>
    );
}

export default InfoCard;
