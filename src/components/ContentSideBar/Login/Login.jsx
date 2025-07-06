import InputCommon from '@components/InputCommon/InputCommon';
import styles from './Login.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';
import { register, signIn } from '@/apis/authService';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProvider';
function Login() {
    const {
        container,
        title,
        boxRememberMe,
        boxLogin,
        lostPassword,
        email,
        password,
    } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);
    const { setIsOpen } = useContext(SideBarContext);
    const { setUserId } = useContext(StoreContext);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            cfmpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Passwords must match ',
            ),
        }),
        onSubmit: async (values) => {
            if (isLoading) return;
            const { email: username, password } = values;
            setIsLoading(true);
            if (isRegister) {
                await register({ username, password })
                    .then((res) => {
                        toast.success(res.data.message);
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }
            if (!isRegister) {
                await signIn({ username, password })
                    .then((res) => {
                        setIsLoading(false);
                        const { id, token, refreshToken } = res;
                        setUserId(id);
                        Cookies.set('token', token);
                        Cookies.set('refreshToken', refreshToken);
                        Cookies.set('userId', id);
                        toast.success('Sign in successfully!');
                        setIsOpen(false);
                    })
                    .catch((err) => {
                        setIsLoading(false);
                        toast.error('Sign in failed!');
                    });
            }
        },
    });
    const handleToggle = () => {
        setIsRegister(!isRegister);
    };
    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label={'Username or email'}
                    type={'text'}
                    isRequired
                    formik={formik}
                />
                {formik.errors.email && formik.touched.email && (
                    <div className={email}>{formik.errors.email}</div>
                )}
                <InputCommon
                    id='password'
                    label={'Password'}
                    type={'password'}
                    isRequired
                    formik={formik}
                />

                {isRegister && (
                    <InputCommon
                        id='cfmpassword'
                        label={'Confirm password'}
                        type={'password'}
                        isRequired
                        formik={formik}
                    />
                )}

                {formik.errors.password && formik.touched.password && (
                    <div className={password}>{formik.errors.password}</div>
                )}
                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}
                <div className={boxLogin}>
                    <Button
                        content={
                            isLoading
                                ? 'LOADING...'
                                : isRegister
                                ? 'REGISTER'
                                : 'LOGIN'
                        }
                        type='submit'
                        // onClick={() => toast.success('Success')}
                    />
                </div>
            </form>
            <Button
                content={
                    isRegister
                        ? 'Already have an account ?'
                        : "Don't have an account ?"
                }
                type='submit'
                isPrimary={false}
                style={{ marginTop: 10 }}
                onClick={handleToggle}
            />
            {!isRegister && (
                <div className={lostPassword}>Lost your password?</div>
            )}
        </div>
    );
}

export default Login;
