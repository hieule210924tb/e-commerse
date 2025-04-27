import { dataInfo } from '@components/Info/contants';
import InfoCard from '@components/Info/InfoCard/InfoCard';
import MainLayout from '@components/Layout/Layout';
import styles from './Info.module.scss';
function Info() {
    const { container } = styles;
    return (
        <div>
            <MainLayout>
                <div className={container}>
                    {dataInfo.map((item, index) => (
                        <InfoCard
                            key={index}
                            title={item.title}
                            desc={item.description}
                            src={item.src}
                        />
                    ))}
                </div>
            </MainLayout>
        </div>
    );
}

export default Info;
