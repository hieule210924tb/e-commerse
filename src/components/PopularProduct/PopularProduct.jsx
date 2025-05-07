import MainLayout from '@components/Layout/Layout';
import styles from './PopularProduct.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';

function PopularProduct({ data }) {
    const { container } = styles;
    console.log(data);
    return (
        <MainLayout>
            <div className={container}>
                {data.map((item) => (
                    <ProductItem
                        key={item.id}
                        src={item.images[0]}
                        prevSrc={item.images[1]}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </MainLayout>
    );
}

export default PopularProduct;
