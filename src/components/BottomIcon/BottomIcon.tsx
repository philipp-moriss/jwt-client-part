import React from 'react';
import styles from "./BottomIcon.module.scss";

export const BottomIcon: React.FC<BottomIconProps> = ({data}) => {
    return (
        <div className={styles['parameters']}>
            {data.map((card, index) => {
                return (<div key={index} className={styles['parameters-parameter']}>
                        <img className={styles['parameters-parameter-icon']} src={card.icon} alt={'icon'}/>
                        <sup className={styles['parameters-parameter-description']}>{card.text}</sup>
                    </div>
                )
            })}
        </div>
    );
};

export type DataIconType = Array<{
    icon: string
    text: string
}>

interface BottomIconProps {
    data: DataIconType
}
