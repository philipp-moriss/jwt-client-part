import { observer } from 'mobx-react-lite';
import React, {ChangeEvent,useState} from 'react';

import styles from './LoginForm.module.scss'
import {Button} from "../Button/Button";
import {useMyStore} from "../../store/Context/Context";

const LoginForm: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {store} = useMyStore()

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.name === 'email') {
            setEmail(event.currentTarget.value)
        }
        if (event.currentTarget.name === 'password') {
            setPassword(event.currentTarget.value)
        }
    }

    return (
        <div className={styles['wrapper']}>
            <div className={'container'}>
                <div className={styles['wrapper-inner']}>
                    <p className={styles['text']}>
                        test mail and password to enter the application :<br/>Email : test@test.com<br/>Password : 11111111
                    </p>
                    <div className={styles['input-inner']}>
                        <input className={styles['input']} value={email} onChange={onChangeHandler} name={'email'} type={'text'} placeholder={'Email'}/>
                        <input className={styles['input']} value={password} onChange={onChangeHandler} name={'password'} type={'password'}
                               placeholder={'Password'}/>
                    </div>
                    {!email || !password ? <p className={styles['text']}>enter email and password</p> : null}
                    <div className={styles['button-inner']}>
                        <Button disabled={!email || !password} buttonText={'Registration'} callBack={() => store.registration(email, password)} buttonStyle={'normal'}/>
                        <Button disabled={!email || !password} buttonText={'Login'} callBack={() => store.login(email, password)} buttonStyle={'normal'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(LoginForm);
