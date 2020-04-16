import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  const profile = [
    { name: "Teshima", age:26},
    { name: "kengo", age:77},
    {age:5}
  ]
  return(
    <div>
      {
        profile.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
return<div>Hi, I am {props.name} and {props.age} years old.</div>
}

User.defaultProps = {
  name: "taro"
}

export default App;
