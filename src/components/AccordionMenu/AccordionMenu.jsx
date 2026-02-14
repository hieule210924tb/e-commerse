import React from 'react';
import styles from './AccordionMenu.module.scss';
import { useState } from 'react';
import cls from 'classnames';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { FaAngleRight } from 'react-icons/fa6';
const AccordionMenu = () => {
    const {
        container,
        title,
        activeTitle,
        contentMenu,
        isVisibility,
        borderBottom,
    } = styles;
    const [isSelected, setIsSelected] = useState(false);
    const handleToggle = () => {
        setIsSelected(!isSelected);
    };
    return (
        <div className={container}>
            <div
                className={cls(title, {
                    [activeTitle]: isSelected,
                })}
                onClick={handleToggle}
            >
                {isSelected ? (
                    <TfiLayoutLineSolid style={{ fontSize: '20px' }} />
                ) : (
                    <FaAngleRight style={{ fontSize: '20px' }} />
                )}{' '}
                ADD
            </div>
            <div
                className={cls(contentMenu, borderBottom, {
                    [isVisibility]: isSelected,
                })}
            >
                <div>Size --------- L ,M ,S</div>
            </div>
            <div
                className={cls(title, {
                    [activeTitle]: isSelected,
                })}
                onClick={handleToggle}
            >
                {isSelected ? (
                    <TfiLayoutLineSolid style={{ fontSize: '20px' }} />
                ) : (
                    <FaAngleRight style={{ fontSize: '20px' }} />
                )}{' '}
                ADD
            </div>
            <div
                className={cls(contentMenu, borderBottom, {
                    [isVisibility]: isSelected,
                })}
            >
                <div>Size --------- L ,M ,S</div>
            </div>
        </div>
    );
};

export default AccordionMenu;
