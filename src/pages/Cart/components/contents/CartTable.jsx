import React from 'react';
import styles from '../../Cart.module.scss';
// import SelectBox from '@/pages/OurShop/components/SelectBox';
// import LoadingCart from '@/pages/Cart/components/Loading';

const CartTable = () => {
    const { cartTable } = styles;

    // const handleQuantityChange = (id, newQuantity) => {
    //     console.log('Update item:', id, 'to quantity:', newQuantity);
    // };

    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
    ];
    const getValueSelect = (value) => {
        // const data = {
        //     userId,
        //     productId,
        //     quantity,
        //     size,
        //     isMultiple: true
        // };

        // getData(data);
        console.log(value);
    };
    const cartItems = [
        {
            id: 1,
            name: 'nnnnn',
            price: 102.25,
            sku: 8435,
            size: 'M',
            quantity: 1,
            image: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.1-min.jpg',
        },
        {
            id: 2,
            name: 'nndddnnn',
            price: 102.25,
            sku: 84565,
            size: 'M',
            quantity: 1,
            image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg',
        },
    ];

    return (
        <div className={cartTable}>
            <table>
                <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th />
                        <th>PRICE</th>
                        <th>SKU</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td className={styles.product}>
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <p>{item.name}</p>
                                    <p>Size: {item.size}</p>
                                </div>
                            </td>
                            <td>
                                <div
                                    style={{
                                        cursor: 'pointer',
                                    }}
                                >
                                    &#128465;
                                </div>
                            </td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.sku}</td>
                            <td>
                                <select
                                    type='show'
                                    // defaultValue={item.quantity}
                                    options={showOptions}
                                    getValue={getValueSelect}
                                />
                            </td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* {isLoading && <LoadingCart />} */}
        </div>
    );
};

export default CartTable;
