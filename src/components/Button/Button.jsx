import styles from './Button.module.scss';
import classNames from 'classnames';
function Button({ content, isPrimary = true, type = 'button', ...props }) {
    const { btn, primaryBtn, secondaryBtn } = styles;
    return (
        <button
            type={type}
            {...props}
            className={classNames(btn, {
                [primaryBtn]: isPrimary,
                [secondaryBtn]: !isPrimary,
            })}
        >
            {content}
        </button>
    );
}

export default Button;
