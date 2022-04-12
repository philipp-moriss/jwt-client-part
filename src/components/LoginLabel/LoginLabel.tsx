import React from 'react';
import styles from './LoginLabel.module.scss'

export const LoginLabel : React.FC<LoginLabelProps> = ({email}) => {


    let name = email.split('@')[0]
    if (!name){
        name = email
    }

    const GoTopHandler = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div onClick={GoTopHandler} className={styles['inner']}>
           {name}
        </div>
    );
};

interface LoginLabelProps {
    email : string
}
