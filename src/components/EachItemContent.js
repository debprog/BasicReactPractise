import React from 'react'
import styles from './EachItemContent.module.css'

import profileImage from '../assets/profile.jpg';

const EachItemContent = (props) => {
    return (
        <div className={styles.container}>

            <div className={styles.pic}>
                {/* <img src={profileImage} alt="" /> */}
            </div>

            <div className={styles.texts}>

                <p className={styles.name} >{props.name}</p>
                <p className={styles.age} >{props.age}</p>
            </div>

        </div>
    )
}

export default EachItemContent
