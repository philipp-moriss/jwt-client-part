import React from 'react';
import styles from './NeedHelpPage.module.scss'
import {Button} from "../../components/Button/Button";

export const NeedHelpPage = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['info']}>
                <h2 className={styles['info-title']}>Need help with photography or videography?</h2>
                <h3 className={styles['info-sub-title']}>We're here for you!</h3>
                <Button buttonText={'Get in touch'} buttonStyle={'primary'} />
            </div>
        </div>
    );
};
