import '../common.css'

import ReactDOM from 'react-dom'
import React from 'react'

const HelloWorld = props => { // arrow function
      // equiv to: function HelloWorld(props) { return ... } // for the purposes of this exercise
  // TODO: pass through another prop to customise the greeting
  // rather than it always be hardcoded as Hello
  // return <h1>Hello, {props.name}</h1>
  // return <h1>{props.greeting}, {props.name}</h1>
  return <h1>{props.greeting}, {props.name}{props.punc || "!"}</h1>
}

ReactDOM.render(
  <HelloWorld name="Chris" greeting="Hej" />,
  document.getElementById('react-root')
)


// react dev tools gives you 'react' tab 