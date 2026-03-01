import InputCustom from '@components/InputCommon2/Input';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import cls from 'classnames';

const Checkout = () => {
    const { container, leftBody, rightBody, row, row2Column, title, coupon } =
        styles;
    const dataOptions = [
        {
            value: '1',
            label: 'Option 1',
        },
        {
            value: '2',
            label: 'Option 2',
        },
        {
            value: '3',
            label: 'Option 3',
        },
    ];
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className={container}>
            <div className={leftBody}>
                <p className={coupon}>
                    Have a coupon? <span>Click here enter</span>{' '}
                </p>
                <p className={title}>BILLING DETAILS</p>
                <form
                    action=''
                    onSubmit={handleSubmit((data) => {
                        console.log(data);
                    })}
                >
                    <div className={row}>
                        <div className={cls(row, row2Column)}>
                            <InputCustom
                                label={'First Name'}
                                type={'text'}
                                placeholder={'First Name'}
                                isRequired
                                register={register('firstName', {
                                    required: true,
                                    maxLength: 80,
                                })}
                            />
                            <InputCustom
                                label={'Last Name'}
                                type={'text'}
                                placeholder={'Last Name'}
                                isRequired
                                register={register('lastName', {
                                    required: true,
                                    maxLength: 80,
                                })}
                            />
                        </div>
                    </div>
                    <div className={row}>
                        <InputCustom
                            label={'Company Name (optional)'}
                            type={'text'}
                            placeholder={'companyName'}
                        />
                    </div>
                    <div className={row}>
                        <InputCustom
                            label={'Country / Region'}
                            dataOptions={dataOptions}
                            isRequired
                            register={register('country', {
                                required: true,
                            })}
                        />
                    </div>
                    <div className={row}>
                        <InputCustom
                            label={'Street address'}
                            type={'text'}
                            isRequired
                            placeholder={'Street address'}
                            register={register('streetAddress', {
                                required: true,
                            })}
                        />
                    </div>
                    <div className={row}>
                        <InputCustom
                            label={'apartment'}
                            type={'text'}
                            isRequired
                            isShowlabel
                            register={register('apartment')}
                        />
                    </div>
                    <div className={row}>
                        <InputCustom
                            label={'Town / City'}
                            type={'text'}
                            isRequired
                            placeholder={'Street address'}
                            register={register('city')}
                        />
                    </div>
                    <div className={row}>
                        <InputCustom
                            label={'State'}
                            dataOptions={dataOptions}
                            isRequired
                            register={register('state', {
                                required: true,
                            })}
                        />
                    </div>
                    <div className={row}>
                        <InputCustom
                            label={'Phone'}
                            dataOptions={dataOptions}
                            isRequired
                            register={register('phone', {
                                required: true,
                            })}
                        />
                    </div>
                    <div className={row}>
                        <InputCustom
                            label={'ZIP Code'}
                            dataOptions={dataOptions}
                            isRequired
                            register={register('zipCode', {
                                required: true,
                            })}
                        />
                    </div>
                    <div className={row}>
                        <InputCustom
                            label={'Email Address'}
                            dataOptions={dataOptions}
                            isRequired
                            register={register('email', {
                                required: true,
                            })}
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div className={rightBody}>2</div>
        </div>
    );
};

export default Checkout;
