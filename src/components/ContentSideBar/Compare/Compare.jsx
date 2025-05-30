import HeaderSideBar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSidebar';
import { TfiReload } from 'react-icons/tfi';
import styles from './Compare.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
function Compare() {
    const { container, boxContent } = styles;
    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar icon={<TfiReload />} title='COMPARE' />
                <ItemProduct />
            </div>
            <div>
                <Button content={'VIEW COMPARE'} />
            </div>
        </div>
    );
}

export default Compare;
