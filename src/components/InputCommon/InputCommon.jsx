import { useState } from 'react';
import styles from './InputCommon.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';
function InputCommon({ label, type, isRequired = false }) {
    const { labelInput, boxInput, container, boxIcon } = styles;
    const isPassword = type === 'password' ? true : false;
    const [showPassword, setShowPassword] = useState(false);
    const isShowTextPassword =
        type === 'password' && showPassword ? 'text' : type;
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span> *</span>}
            </div>
            <div className={boxInput}>
                <input type={isShowTextPassword} />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;
