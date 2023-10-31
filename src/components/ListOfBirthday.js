import BirthdayItem from './BirthdayItem';
import styles from './listOfBirthday.module.css';

import React from 'react'

const ListOfBirthday = (props) => {
    return (
        <div className={styles.listContainer}>


            {props.items.map((eachBirthday) => (

                <BirthdayItem
                    key={eachBirthday.id}
                    id={eachBirthday.id}
                    name={eachBirthday.name}
                    age={eachBirthday.age}
                />

            ))}




        </div>
    )
}

export default ListOfBirthday;
