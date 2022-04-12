import React from 'react';
import styles from './Button.module.scss'

export const Button: React.FC<ButtonPropsType> = ({
                                                      buttonText,
                                                      buttonStyle,
                                                      callBack,
                                                      disabled
                                                  }) => {

    const renderNormalButton = () => {
        return (
            <div onClick={callBack} className={`${styles['button']} ${styles[`button-${buttonStyle}`]} ${disabled ? styles['disabled'] : ''}`}>
                <span className={styles['button-text']}>{buttonText}</span>
            </div>
        )
    }

    const renderPrimaryButton = () => {
        return (<div className={`${styles['button']} ${styles[`button-${buttonStyle}`]}`}>
            <div className={styles['button-icon']}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2_66)">
                        <path
                            d="M16 5.51392C21.7915 5.51392 26.4861 10.2085 26.4861 16C26.4861 21.7915 21.7915 26.4861 16 26.4861C10.2085 26.4861 5.51389 21.7915 5.51389 16C5.51389 10.2085 10.2085 5.51392 16 5.51392Z"
                            stroke="black" strokeWidth="12.5833" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.4223 11.8055L24.4413 22.2287" stroke="black" strokeWidth="12.5833"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.5777 11.8055H25.6158" stroke="black" strokeWidth="12.5833" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M11.1554 16L17.1744 5.57678" stroke="black" strokeWidth="12.5833"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.5777 20.1944L7.55869 9.77124" stroke="black" strokeWidth="12.5833"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.4223 20.1945H6.38423" stroke="black" strokeWidth="12.5833" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M20.8446 16L14.8256 26.4232" stroke="black" strokeWidth="12.5833"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2_66">
                            <rect width="32" height="32" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <span className={styles['button-text']}>{buttonText}</span>
        </div>)
    }

    const RenderButton = {
        normal: renderNormalButton,
        primary: renderPrimaryButton,
    }

    return (
        RenderButton[buttonStyle]()
    );
};

interface ButtonPropsType {
    buttonText: string
    buttonStyle: 'normal' | 'primary'
    callBack?: () => void;
    disabled?: boolean;
}
