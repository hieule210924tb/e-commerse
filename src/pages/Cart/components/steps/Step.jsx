import React from 'react';
import styles from '../../Cart.module.scss';
import Stepper from '@/pages/Cart/components/steps/Stepper';
function Step({ currentStep, setCurrentStep }) {
    const { containerSteps, steps, line, textNoti } = styles;
    const dataSteps = [
        { number: 1, content: 'Shopping cart' },
        { number: 2, content: 'Checkout' },
        { number: 3, content: 'Order status' },
    ];
    return (
        <div className={containerSteps}>
            <div className={steps}>
                {dataSteps.map((item, index) => {
                    return (
                        <>
                            <Stepper
                                number={item.number}
                                content={item.content}
                                key={index}
                                isDisabled={index >= currentStep}
                                setCurrentStep={setCurrentStep}
                            />
                            {index !== dataSteps.length - 1 && (
                                <div className={line}></div>
                            )}
                        </>
                    );
                })}
            </div>
            <div className={textNoti}>
                You are out of time! Checkout now to avoid losing your order!
            </div>
        </div>
    );
}

export default Step;
