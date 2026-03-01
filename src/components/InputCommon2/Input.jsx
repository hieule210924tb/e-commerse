import React from 'react';
import styles from './styles.module.scss';
const InputCustom = ({
    label,
    type,
    dataOptions,
    isRequired,
    register,
    isShowlabel = true,
}) => {
    const { container, labelCLS } = styles;
    const renderInput = () => {
        if (type === 'text') {
            return <input type='text' placeholder={label} {...register} />;
        } else {
            return (
                <select {...register}>
                    <option value={''} selected disabled hidden>
                        {label}
                    </option>
                    {dataOptions.map((item) => {
                        return <option value={item.value}>{item.label}</option>;
                    })}
                </select>
            );
        }
    };
    return (
        <div className={container}>
            {isShowlabel && (
                <label className={labelCLS} for=''>
                    {label} {isRequired && <span>*</span>}
                </label>
            )}
            {renderInput()}
        </div>
    );
};

export default InputCustom;
