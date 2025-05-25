import { useState } from 'react';
import styles from './InputCommon.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';
function InputCommon({ label, type, isRequired = false, ...props }) {
    const { labelInput, boxInput, container, boxIcon, errMsg } = styles;
    const { formik, id } = props;
    const isPassword = type === 'password' ? true : false;
    const [showPassword, setShowPassword] = useState(false);
    const isShowTextPassword =
        type === 'password' && showPassword ? 'text' : type;
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const isErr = formik.touched[id] && formik.errors[id];
    const messageErr = formik.errors[id];
    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span> *</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={isShowTextPassword}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
                {isErr && <div className={errMsg}>{messageErr}</div>}
            </div>
        </div>
    );
}

export default InputCommon;
