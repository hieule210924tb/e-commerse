import InputCommon from '@components/InputCommon/InputCommon';
import styles from './Login.module.scss';
import Button from '@components/Button/Button';
function Login() {
    const { container, title, boxRememberMe, boxLogin, lostPassword } = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <InputCommon label={'Username or email'} type={'text'} isRequired />
            <InputCommon label={'Password'} type={'password'} isRequired />
            <div className={boxRememberMe}>
                <input type='checkbox' />
                <span>Remember me</span>
            </div>
            <div className={boxLogin}>
                <Button content={'LOGIN'} />
            </div>
            <div className={lostPassword}>Lost your password?</div>
        </div>
    );
}

export default Login;
