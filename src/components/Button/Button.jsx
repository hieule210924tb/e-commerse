import styles from './Button.module.scss';
import classNames from 'classnames';
function Button({
    content,
    isPrimary = true,
    customClassname = false,
    type = 'button',
    ...props
}) {
    const { btn, primaryBtn, secondaryBtn } = styles;
    return (
        <button
            type={type}
            {...props}
            className={classNames(btn, {
                [primaryBtn]: isPrimary,
                [secondaryBtn]: !isPrimary,
                [customClassname]: customClassname,
            })}
        >
            {content}
        </button>
    );
}

export default Button;
