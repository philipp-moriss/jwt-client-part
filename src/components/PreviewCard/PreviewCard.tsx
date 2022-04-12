import React from 'react';
import styles from './PreviewCard.module.scss'
import {Button} from "../Button/Button";

export const PreviewCard: React.FC<PreviewCardProps> = ({bgImage, text, title}) => {
    return (
        <div className={styles['preview-card-inner']} style={{backgroundImage: `url(${bgImage})`}}>
            <div className={styles['info-inner']}>
                <h3 className={styles['info-title']}>{title}</h3>
                <p className={styles['info-text']}>{text}</p>
                <Button buttonText={'Read more'} buttonStyle={'primary'}/>
            </div>
        </div>
    );
};


export interface PreviewCardProps {
    bgImage: string;
    title: string;
    text: string
}
