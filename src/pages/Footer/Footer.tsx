import React from 'react';
import styles from './Footer.module.scss'

import {CheckBox} from "../../components/CheckBox/CheckBox";

import logo from '../../assets/logo.svg'
import instagram from '../../assets/icon/instagram.svg'
import facebook  from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twitter.svg'

export const Footer = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['inner']}>
                <div className={styles['top-content-inner']}>
                    <div className={styles['top-content-left-side']}>
                        <div className={styles['top-content-left-side-logo']}>
                            <img src={logo} alt={'logo'}/>
                        </div>
                        <span className={styles['top-content-left-side-sub-title']}>Photographers & videographers capturing the world around us.</span>
                    </div>
                    <div className={styles['top-content-right-side']}>
                        <ul className={styles['business-areas']}>
                            <li className={styles['business-areas-item']}>Business areas</li>
                            <li className={styles['business-areas-item']}>
                                <a className={styles['business-areas-link']} href="#">Product Photography</a>
                            </li>
                            <li className={styles['business-areas-item']}>
                                <a className={styles['business-areas-link']} href="#">Architecture Photography</a>
                            </li>
                            <li className={styles['business-areas-item']}>
                                <a className={styles['business-areas-link']} href="#">Drone Photography</a>
                            </li>
                            <li className={styles['business-areas-item']}>
                                <a className={styles['business-areas-link']} href="#">Wildlife Photography</a>
                            </li>
                        </ul>
                        <ul className={styles['business-areas']}>
                            <li className={styles['business-areas-item']}>Pages</li>
                            <li className={styles['business-areas-item']}>
                                <a className={styles['business-areas-link']} href="#">Gear cage</a>
                            </li>
                            <li className={styles['business-areas-item']}>
                                <a className={styles['business-areas-link']} href="#">Featured images</a>
                            </li>
                            <li className={styles['business-areas-item']}>
                                <a className={styles['business-areas-link']} href="#">Contact</a>
                            </li>
                            <li className={styles['business-areas-item']}>
                                <a className={styles['business-areas-link']} href="#">Style guide</a>
                            </li>
                            <li className={styles['business-areas-item']}>
                                <a className={styles['business-areas-link']} href="#">Instructions</a>
                            </li>
                            <li className={styles['business-areas-item']}>
                                <a className={styles['business-areas-link']} href="#">Changelog</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles['center-content']}>
                    <div className={styles['center-content-inner']}>
                        <h4 className={styles['center-content-title']}>Subscribe to our newsletter</h4>
                        <span className={styles['center-content-sub-title']}>Read about all the things we do.</span>
                    </div>
                    <div className={styles['center-content-check-box-inner']}>
                        <CheckBox/>
                    </div>
                </div>
                <div className={styles['all-right-inner']}>
                    <p className={styles['all-right-text']}>© Aperture Photography, Inc. All rights reserved. Licensing .</p>
                    <div className={styles['all-right-icons']}>
                        <div className={styles['all-right-icons-icon']}>
                            <a href={'#'}><img src={twitter} alt={'icon-social'}/></a></div>
                        <div className={styles['all-right-icons-icon']}>
                            <a href={'#'}><img src={instagram} alt={'icon-social'}/></a>
                        </div>
                        <div className={styles['all-right-icons-icon']}>
                            <a href={'#'}><img src={facebook} alt={'icon-social'}/></a>
                        </div>
                    </div>
                    <a href={'Contacts'}></a>
                </div>
            </div>
        </div>
    );
};
