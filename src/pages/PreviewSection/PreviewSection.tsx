import React from 'react';
import styles from './PreviewSection.module.scss'
import {BottomIcon, DataIconType} from "../../components/BottomIcon/BottomIcon";

export const PreviewSection: React.FC<PreviewSectionProps> = ({title, text, dataIcon, bgImage, anchor = ''}) => {
    return (
        <section className={styles['section-container']} style={{backgroundImage: `url(${bgImage})`}}>
            <div className={styles['wrapper']}>
                <div className={styles['section-inner']}>
                    <h3 className={styles['section-title']}>{title}</h3>
                    <p className={styles['section-text']}>{text}</p>
                </div>
                <div className={styles['section-params']}>
                    <BottomIcon data={dataIcon}/>
                </div>
            </div>
            <a href={anchor}></a>
        </section>
    );
};


interface PreviewSectionProps {
    title: string
    text: string
    bgImage: string
    dataIcon: DataIconType
    anchor?: string
}
