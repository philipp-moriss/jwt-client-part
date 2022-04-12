import React from 'react';
import styles from './ClientsPage.module.scss'

//label
import label1 from '../../assets/label-clients/label1.svg'
import label2 from '../../assets/label-clients/label2.svg'
import label3 from '../../assets/label-clients/label3.svg'
import label4 from '../../assets/label-clients/label4.svg'
import label5 from '../../assets/label-clients/label5.svg'

export const ClientsPage = () => {

    const clientsArray = [{label: label1}, {label: label2}, {label: label3}, {label: label4}, {label: label5}]

    return (
        <section className={styles['wrapper']}>
            <div className={'container'}>
                <h2 className={styles['title']}>Past clients</h2>
                <h3 className={styles['sub-title']}>Trusted by your favourite companies</h3>
                <div className={styles['label-inner']}>
                    {clientsArray.map((client, index)=>{
                       return <img key={index} className={styles['label']} src={client.label} alt={'client'}/>
                    })}
                </div>
            </div>
        </section>
    );
};
