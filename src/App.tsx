import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";


type getType = {
  "userId": number,
  "id": number,
  "title": string,
  body: string
}

function App() {
  const [get, setGet] = useState<Array<getType>>([])
  console.log(get)
  const getRequestHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setGet(json))
  }

  const clean = () => {
    setGet([])
  }

useEffect(() => {fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => setGet(json))}, [])

  return (
    <div className="App">

      <Button callback={clean} nickName={'GetRequest'}/>
      <p></p>
      <ul>
        {get.map((el: getType) => {
          return (
            <li>
              <span>{el.id}- </span>
              <span>{el.userId}-</span>
              <span>{el.title}</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
