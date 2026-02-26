import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { CiHeart } from 'react-icons/ci';
import { TfiReload } from 'react-icons/tfi';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import AccordionMenu from '@components/AccordionMenu/AccordionMenu';
import InformationProduct from '@/pages/DetailProduct/components/Infomation';
import ReviewProduct from '@/pages/DetailProduct/components/Review';
import MyFooter from '@components/Footer/Footer';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import cls from 'classnames';
import { getDetailProduct, getRelatedProduct } from '@/apis/productsService';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { toast } from 'react-toastify';
import { handleAddProductToCartCommon } from '@/utils/helper';
import { SideBarContext } from '@/contexts/SideBarProvider';
import Cookies from 'js-cookie';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const DetailProduct = () => {
    const {
        container,
        navigateSection,
        contentSection,
        imageBox,
        infoBox,
        price,
        description,
        size,
        active,
        titleSize,
        clear,
        boxSize,
        functionInfo,
        boxBtn,
        incrementAmount,
        orSection,
        addFunc,
        info,
        activeDisabledBtn,
        loading,
        emptyData,
    } = styles;
    const [menuSelected, setMenuSelected] = useState(1);
    const [sizeSelected, setSizeSelected] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [relatedData, setRelatedData] = useState([]);
    const [isLoadingBtn, setIsLoadingBtn] = useState(false);

    const userId = Cookies.get('userId');

    const { setIsOpen, setType, handleGetListProductsCart } =
        useContext(SideBarContext);
    const param = useParams();
    const navigate = useNavigate();
    const dataAccordionMenu = [
        {
            id: 1,
            titleMenu: 'ADDITIONAL INFORMATION',
            content: <InformationProduct />,
        },
        {
            id: 2,
            titleMenu: 'REVIEW (0)',
            content: <ReviewProduct />,
        },
    ];
    const handleSetMenuSelected = (id) => {
        setMenuSelected(id);
    };

    const handleSelectedSize = (size) => {
        setSizeSelected(size);
    };
    const handleClearSizeSelected = () => {
        setSizeSelected('');
    };
    const handleSetQuantity = (type) => {
        if (quantity < 1) return;

        setQuantity((prev) =>
            type === INCREMENT ? (prev += 1) : quantity === 1 ? 1 : (prev -= 1),
        );
    };
    const fetchDataDetail = async (id) => {
        setIsLoading(true);
        try {
            const data = await getDetailProduct(`${id}`);
            setData(data);
            setIsLoading(false);
        } catch (err) {
            toast.error('Có lỗi khi tải dữ liệu');
            setData();
            setIsLoading(false);
        }
    };
    const fetchDataRelatedProduct = async (id) => {
        setIsLoading(true);
        try {
            const data = await getRelatedProduct(`${id}`);
            setRelatedData(data);
            setIsLoading(false);
        } catch (err) {
            toast.error('Có lỗi khi tải dữ liệu');
            setRelatedData([]);
            setIsLoading(false);
        }
    };
    const handleAdd = () => {
        handleAddProductToCartCommon(
            userId,
            setIsOpen,
            setType,
            toast,
            sizeSelected,
            param.id,
            quantity,
            setIsLoadingBtn,
            handleGetListProductsCart,
        );
    };
    useEffect(() => {
        if (param.id) {
            fetchDataDetail(param.id);
            fetchDataRelatedProduct(param.id);
        }
    }, [param]);
    return (
        <div>
            <MyHeader />
            <div className={container}>
                <MainLayout>
                    <div className={navigateSection}>
                        <div>Home {'>'} Men</div>
                        <div style={{ cursor: 'pointer' }}>
                            {'<'} Return to previous page{' '}
                        </div>
                    </div>
                    {isLoading ? (
                        <div className={loading}>
                            <LoadingTextCommon />
                        </div>
                    ) : (
                        <>
                            {!data ? (
                                <div className={emptyData}>
                                    <p>No Result</p>
                                    <Button
                                        content={'Back to Our Shop'}
                                        onClick={() => navigate('/shop')}
                                    />
                                </div>
                            ) : (
                                <div className={contentSection}>
                                    <div className={imageBox}>
                                        {data?.images.map((src) => {
                                            return <img src={src} alt='' />;
                                        })}
                                    </div>
                                    <div className={infoBox}>
                                        <h1>{data?.name}</h1>
                                        <p className={price}>${data?.price}</p>
                                        <p className={description}>
                                            {data?.description}
                                        </p>
                                        <p className={titleSize}>
                                            {' '}
                                            Size {sizeSelected}
                                        </p>
                                        <div className={boxSize}>
                                            {data?.size.map(
                                                (itemSize, index) => (
                                                    <div
                                                        key={index}
                                                        className={cls(size, {
                                                            [active]:
                                                                sizeSelected ===
                                                                itemSize.name,
                                                        })}
                                                        onClick={() =>
                                                            handleSelectedSize(
                                                                itemSize.name,
                                                            )
                                                        }
                                                    >
                                                        {itemSize.name}
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                        {sizeSelected && (
                                            <p
                                                onClick={
                                                    handleClearSizeSelected
                                                }
                                                className={clear}
                                            >
                                                Clear
                                            </p>
                                        )}
                                        <div className={functionInfo}>
                                            <div className={incrementAmount}>
                                                <div
                                                    onClick={() =>
                                                        handleSetQuantity(
                                                            DECREMENT,
                                                        )
                                                    }
                                                >
                                                    -
                                                </div>
                                                <div>{quantity}</div>
                                                <div
                                                    onClick={() =>
                                                        handleSetQuantity(
                                                            INCREMENT,
                                                        )
                                                    }
                                                >
                                                    +
                                                </div>
                                            </div>
                                            <div className={boxBtn}>
                                                <Button
                                                    content={
                                                        isLoadingBtn ? (
                                                            <LoadingTextCommon />
                                                        ) : (
                                                            'Add to Cart'
                                                        )
                                                    }
                                                    customClassname={
                                                        !sizeSelected &&
                                                        activeDisabledBtn
                                                    }
                                                    onClick={handleAdd}
                                                />
                                            </div>
                                        </div>
                                        <div className={orSection}>
                                            <div></div>
                                            <span>OR</span>
                                            <div></div>
                                        </div>
                                        <div>
                                            <Button
                                                content={'Buy now'}
                                                customClassname={
                                                    !sizeSelected &&
                                                    activeDisabledBtn
                                                }
                                            />
                                        </div>
                                        <div className={addFunc}>
                                            <div>
                                                <CiHeart />
                                            </div>
                                            <div>
                                                <TfiReload />
                                            </div>
                                        </div>
                                        <div>
                                            <PaymentMethods />
                                        </div>
                                        <div className={info}>
                                            <div>
                                                Brand: <span>Brand 03</span>
                                            </div>

                                            <div>
                                                SKU: <span>87654</span>
                                            </div>

                                            <div>
                                                Category: <span>Men</span>
                                            </div>
                                        </div>
                                        <div>
                                            {dataAccordionMenu.map((item) => {
                                                return (
                                                    <AccordionMenu
                                                        key={item.id}
                                                        titleMenu={
                                                            item.titleMenu
                                                        }
                                                        contentJsx={
                                                            item.content
                                                        }
                                                        onClick={() =>
                                                            handleSetMenuSelected(
                                                                item.id,
                                                            )
                                                        }
                                                        isSelected={
                                                            menuSelected ===
                                                            item.id
                                                        }
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    {relatedData.length ? (
                        <div>
                            <h2>Related products</h2>

                            <SliderCommon
                                data={relatedData}
                                isProductItem
                                showItem={4}
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                </MainLayout>
            </div>
            <MyFooter />
        </div>
    );
};

export default DetailProduct;
