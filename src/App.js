import './App.css';
import React from 'react';
import ListOfBirthday from './components/ListOfBirthday';
import styles from './components/listOfBirthday.module.css';
import { useState } from 'react';
const birthday_Object = [

  {
    id: '1',
    name: "Debayan",
    age: '25'
  },

  {
    id: '2',
    name: "Rupsha",
    age: '25'
  },

  {
    id: '3',
    name: "Arnab",
    age: '27'
  },

  {
    id: '4',
    name: "Rahul",
    age: '52'
  }
]

function App() {

  const [willShow, setWillShow] = useState(true);

  const onClickHandler = () => {

    setWillShow(false);

  }

  return (
    <div className='background'>

      <div className="listContainer">

        <h1></h1>
        {willShow && <ListOfBirthday items={birthday_Object} />}
        {!willShow && <p>No items</p>}
        <button className="btn" onClick={onClickHandler}>Clear All</button>

      </div>




    </div>
  );
}

export default App;
