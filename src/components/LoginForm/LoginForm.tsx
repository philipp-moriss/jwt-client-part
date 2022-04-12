import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useContext, useState} from 'react';
import {Context} from "../index";

const LoginForm: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {store} = useContext(Context)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.name === 'email') {
            setEmail(event.currentTarget.value)
        }
        if (event.currentTarget.name === 'password') {
            setPassword(event.currentTarget.value)
        }
    }

    return (
        <div>
            <input value={email} onChange={onChangeHandler} name={'email'} type={'text'} placeholder={'Email'}/>
            <input value={password} onChange={onChangeHandler} name={'password'} type={'password'}
                   placeholder={'Password'}/>
            <button onClick={() => store.login(email, password)}>логин</button>
            <button onClick={() => store.registration(email, password)}>регистрация</button>
        </div>
    );
};

export default observer(LoginForm);
