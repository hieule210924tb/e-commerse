import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import styles from '../OurShop.module.scss';

import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import SelectBox from '@pages/OurShop/components/SelectBox';
function Filter() {
    const { containerFilter, boxIcon, boxLeft } = styles;
    const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid } =
        useContext(OurShopContext);
    const getValueSelect = (value, type) => {
        if (type === 'sort') {
            setSortId(value);
        } else {
            setShowId(value);
        }
    };
    const handleGetShowGrid = (type) => {
        console.log(type);
        if (type === 'grid') {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(false);
        }
    };
    return (
        <div className={containerFilter}>
            <div className={boxLeft}>
                {/* <select className={cls(selectBox, sort)}>
                    {sortOptions.map((sort) => (
                        <option>{sort.label}</option>
                    ))}
                </select> */}
                <SelectBox
                    options={sortOptions}
                    getValue={getValueSelect}
                    type='sort'
                />
                <div className={boxIcon}>
                    <TfiLayoutGrid4
                        style={{ fontSize: 25, cursor: 'pointer' }}
                        onClick={() => handleGetShowGrid('grid')}
                    />
                    <div
                        style={{
                            height: 20,
                            width: 1,
                            backgroundColor: '#e1e1e1',
                        }}
                    />
                    <CiCircleList
                        style={{
                            fontSize: 27,
                            color: '#222',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleGetShowGrid('list')}
                    />
                </div>
            </div>
            <div className={boxLeft}>
                <div style={{ fontSize: 14, color: '#555' }}>Show</div>
                <SelectBox
                    options={showOptions}
                    getValue={getValueSelect}
                    type='show'
                />
            </div>
        </div>
    );
}

export default Filter;
