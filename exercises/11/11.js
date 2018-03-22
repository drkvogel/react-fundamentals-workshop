import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const MakeThingsBlue = props => {
  return <div style={{ color: 'blue' }}>{props.children}</div>
}

MakeThingsBlue.propTypes = {
  // TODO: fill in the prop types
  // you might need https://reactjs.org/docs/typechecking-with-proptypes.html
  // to figure out what the proptype is

  // children: PropTypes.element // no
  children: PropTypes.node.isRequired
}

// MakeThingsBlue.
// ???

// const App = () => {
const App = props => {
  // TODO: rewrite this function passing in the children prop explicitly
  return (
    // <MakeThingsBlue>
    //   <p>Hello world</p>
    // </MakeThingsBlue>

    // <MakeThingsBlue children={<p>Hello world</p>} /> // equivalent

    <MakeThingsBlue>
      {props.children}
    </MakeThingsBlue>
  )
}

ReactDOM.render(<App children={<p>Hello world</p>} />, document.getElementById('react-root'))


