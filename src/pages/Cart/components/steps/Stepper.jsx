import styles from '../../Cart.module.scss';
import cls from 'classnames';
function Stepper({ number, content, isDisabled, setCurrentStep }) {
    const { stepper, numberStep, textStep, isDisableNumber, isDisableText } =
        styles;
    return (
        <div className={stepper} onClick={() => setCurrentStep(number)}>
            <div className={cls(numberStep, { [isDisableNumber]: isDisabled })}>
                {number}
            </div>
            <div className={cls(textStep, { [isDisableText]: isDisabled })}>
                {content}
            </div>
        </div>
    );
}

export default Stepper;
