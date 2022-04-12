import React, {useState, MouseEvent} from 'react';
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import {Button} from "../Button/Button";
import {useMyStore} from "../../store/Context/Context";

export const Header = () => {
    const {store} = useMyStore()

    const [togle, setTogle] = useState<boolean>(false)

    const togleMenu = () => {
        setTogle(!togle)
        if (togle) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }

    const closeMenu = (event : MouseEvent<HTMLAnchorElement>, scrollTo= 'whatWeDo') => {
        event.preventDefault()
        setTogle(false)
        const a = document.querySelector(`a[href=${scrollTo}]`)
        if (a) {
            a.scrollIntoView(false)
        }
        document.body.style.overflow = 'auto'
    }

    const LogOut = () => {
        setTogle(false)
        document.body.style.overflow = 'auto'
        store.logout()
    }

    return (<header className={styles['header']}>
        <div className={'container'}>
            <nav className={styles['nav-bar']}>
                <div className={styles['logo']}>
                    <img src={logo} alt={'logo'}/>
                </div>
                <ul className={`${styles['menu']} ${styles[String(togle)]}`}>
                    <li className={styles['menu-item']}>
                        <a onClick={closeMenu} className={styles['menu-item-link']}
                           href="#">Business
                            areas</a>
                    </li>
                    <li className={styles['menu-item']}>
                        <a onClick={(event)=>closeMenu(event, 'Images')} className={styles['menu-item-link']}
                           href="#">Featured
                            images</a>
                    </li>
                    <li className={styles['menu-item']}>
                        <a onClick={(event)=>closeMenu(event, 'gearCage')} className={styles['menu-item-link']}
                           href="#">Gear
                            cage</a>
                    </li>
                    <li className={styles['menu-item']}>
                        <a onClick={(event)=>closeMenu(event, 'Contacts')} className={styles['menu-item-link']} href="#">Contact</a>
                    </li>
                    <li><Button callBack={LogOut} buttonStyle={'normal'} buttonText={'Log Out'}/></li>
                </ul>
                <span onClick={togleMenu} className={`${styles['burger']} ${styles[String(togle)]}`}></span>
            </nav>
        </div>
    </header>)
};
