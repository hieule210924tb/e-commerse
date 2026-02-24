import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { CiHeart } from 'react-icons/ci';
import { TfiReload } from 'react-icons/tfi';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import AccordionMenu from '@components/AccordionMenu/AccordionMenu';
import InformationProduct from '@/pages/DetailProduct/components/Infomation';
import ReviewProduct from '@/pages/DetailProduct/components/Review';

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
        titleSize,
        functionInfo,
        boxBtn,
        incrementAmount,
        orSection,
        addFunc,
        info,
    } = styles;
    const [menuSelected, setMenuSelected] = useState(1);

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
    return (
        <>
            <MyHeader />
            <div className={container}>
                <MainLayout>
                    <div className={navigateSection}>
                        <div>Home {'>'} Men</div>
                        <div style={{ cursor: 'pointer' }}>
                            {'<'} Return to previous page{' '}
                        </div>
                    </div>
                    <div className={contentSection}>
                        <div className={imageBox}>
                            <img
                                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-16.1-min.jpg'
                                alt=''
                            />
                            <img
                                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-16.1-min.jpg'
                                alt=''
                            />
                            <img
                                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-16.1-min.jpg'
                                alt=''
                            />
                            <img
                                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-16.1-min.jpg'
                                alt=''
                            />
                        </div>
                        <div className={infoBox}>
                            <h1>Title</h1>
                            <p className={price}>$1.89.23</p>
                            <p className={description}>
                                ore minima itaque, deleniti alias tempore
                                praesentium, cum fugit facilis quam earum.
                            </p>
                            <div className={titleSize}>
                                <div className={size}>L</div>
                                <div className={size}>M</div>
                                <div className={size}>S</div>
                            </div>
                            <div className={functionInfo}>
                                <div className={incrementAmount}>
                                    <div>-</div>
                                    <div>1</div>
                                    <div>+</div>
                                </div>
                                <div className={boxBtn}>
                                    <Button content={'Add to cart'} />
                                </div>
                            </div>
                            <div className={orSection}>
                                <div></div>
                                <span>OR</span>
                                <div></div>
                            </div>
                            <div>
                                <Button content={'Buy now'} />
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
                                            titleMenu={item.titleMenu}
                                            contentJsx={item.content}
                                            onClick={() =>
                                                handleSetMenuSelected(item.id)
                                            }
                                            isSelected={
                                                menuSelected === item.id
                                            }
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </MainLayout>
            </div>
        </>
    );
};

export default DetailProduct;
