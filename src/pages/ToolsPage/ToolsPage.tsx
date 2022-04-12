import React from 'react';
import styles from './ToolsPage.module.scss'
import {BottomIcon} from "../../components/BottomIcon/BottomIcon";
import timer from "../../assets/icon/timer.svg";
import objectiv from "../../assets/icon/objectiv.svg";
import iso from "../../assets/icon/iso.svg";
import local from "../../assets/icon/location.svg";
import {Button} from "../../components/Button/Button";

export const ToolsPage = () => {

    const toolsIconData = [{icon: timer, text: '0,8"'}, {icon: objectiv, text: 'f/5,6'}, {
        icon: iso,
        text: '100'
    }, {icon: local, text: 'Sweden'}]

    return (
        <section className={styles['wrapper']}>
            <div className={styles['left-side']}>
                <div className={styles['info-inner']}>
                    <h3 className={styles['info-sub-title']}>The Gear cage</h3>
                    <h2 className={styles['info-title']}>The tools that we use.</h2>
                    <p className={styles['info-text']}>The say that "no place is boring if you've had a good night's
                        sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days
                        — these are the tools that we actually use everyday to capture the amazing things around us.</p>
                    <Button buttonText={'Check it out'} buttonStyle={'primary'}/>
                    <a href={'gearCage'}></a>
                </div>
            </div>
            <div className={styles['right-side']}>
                <BottomIcon data={toolsIconData}/>
            </div>
        </section>
    );
};
