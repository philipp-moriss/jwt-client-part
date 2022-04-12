import React from 'react';
import styles from './HomePage.module.scss'
import timer from '../../assets/icon/timer.svg'
import objectiv from '../../assets/icon/objectiv.svg'
import iso from '../../assets/icon/iso.svg'
import local from '../../assets/icon/location.svg'
import {BottomIcon} from "../../components/BottomIcon/BottomIcon";

const HomePage = () => {
    const arrayIcons = [{icon: timer, text: '1/2000s'}, {icon: objectiv, text: 'f/11'}, {
        icon: iso,
        text: '100'
    }, {icon: local, text: 'Iceland'}]
    return (
        <section className={styles['wrapper']}>
            <div className={styles['info-inner']}>
                <h3 className={styles['info-inner-pre-title']}>Photographer & Filmmaker</h3>
                <h1 className={styles['info-inner-title']}>Aperture Studios</h1>
                <p className={styles['info-inner-info']}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                    vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                    tristique posuere.
                </p>
            </div>
            <BottomIcon data={arrayIcons}/>
        </section>
    );
};

export default HomePage;
