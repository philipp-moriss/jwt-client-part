import React, {useState} from 'react';
import styles from './CheckBox.module.scss'

export const CheckBox = () => {
    const [togle, setTogle] = useState(false)

    const TogleHandler = () => {
        setTogle(!togle)
    }

    return (
        <div className={`${styles['inner']} ${styles[String(togle)]}`} onClick={TogleHandler}>
            <div className={styles['checker']}></div>
            <span className={styles['text']}>Subscribe</span>
        </div>
    );
};
