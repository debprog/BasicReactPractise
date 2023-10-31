import React from 'react'
import styles from './BirthdayItem.module.css';
import EachItemContent from './EachItemContent';
const BirthdayItem = (props) => {
    return (
        <div className={styles.styleItem}>

            {/* <span> {props.name + props.id} </span> */}
            <EachItemContent
                id={props.id}
                name={props.name}
                age={props.age}
            />

        </div>
    )
}

export default BirthdayItem;
