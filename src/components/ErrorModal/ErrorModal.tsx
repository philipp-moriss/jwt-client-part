import React, {useEffect} from 'react';
import styles from './ErrorModal.module.scss'
import {useMyStore} from "../../store/Context/Context";

export const  ErrorModal =  () => {

    const {store} = useMyStore()

    useEffect(()=>{
        document.body.style.overflow = 'hidden'
    },[])

    const CloseModalHandler = () => {
        document.body.style.overflow = 'auto'
        store.setError('')
    }

    return (
        <div className={styles['wrapper']}>
            <div className={styles['content']}>
                <h2 className={styles['title']}>Error</h2>
                <p className={styles['text']}>
                    {store.errorText}
                </p>
                <div onClick={CloseModalHandler} className={styles['button']}>
                    OK
                </div>
            </div>
            <div className={styles['overlay']}></div>
        </div>
    );
};
