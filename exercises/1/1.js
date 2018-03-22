import '../common.css' // styling for editor

import ReactDOM from 'react-dom'
import React from 'react'

const HelloWorld = () => {
  // TODO: can you change the h1 to another element?
  // how would we give the h1 a class name?
  // return React.createElement('h1', null, 'Hello There') // 2nd arg can be an object with attributes
  return React.createElement('h1', { className: 'foo' }, 'Hello There') // 2nd arg can be an object with attributes
    // className -> class, to avoid namespace collision with `class` keyword
}

ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById('react-root') // don't render directly into body
)
