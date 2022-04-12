import React from 'react';
import styles from './ConfirmMailPage.module.scss'
import mail from '../../assets/mail.png'


export const ConfirmMailPage = () => {
    return (
        <div className={styles['wrapper']}>
            <p className={styles['text']}>
                please confirm your email, email has been sent.
            </p>
            <div className={styles['mail']}>
                <img src={mail} alt={'mail'}/>
            </div>
        </div>
    );
};
