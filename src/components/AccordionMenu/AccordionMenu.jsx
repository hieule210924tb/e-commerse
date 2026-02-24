import React from 'react';
import styles from './AccordionMenu.module.scss';
import cls from 'classnames';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { FaAngleRight } from 'react-icons/fa6';
const AccordionMenu = ({ titleMenu, contentJsx, onClick, isSelected }) => {
    const {
        container,
        title,
        activeTitle,
        contentMenu,
        isVisibility,
        borderBottom,
    } = styles;
    const handleToggle = () => {
        onClick();
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
                {titleMenu}
            </div>
            <div
                className={cls(contentMenu, borderBottom, {
                    [isVisibility]: isSelected,
                })}
            >
                {contentJsx}
            </div>
        </div>
    );
};

export default AccordionMenu;
