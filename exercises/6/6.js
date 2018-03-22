import '../common.css'

import ReactDOM from 'react-dom'
import React from 'react'
import PropTypes from 'prop-types'

// const AskQuestion = () => {
const AskQuestion = props => {
  return <p>How is your day going today{props.greeting}?</p>
}

AskQuestion.defaultProps = {
  greeting: ', buddy',
}

const HelloWorld = props => {
  // TODO: make the HelloWorld component render the <AskQuestion /> component
  return (
    <div>
      <AskQuestion />
      <h1>
        {props.greeting}, {props.name}
      </h1>
    </div>
  )
}
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.oneOf(['Hello', 'Hi']).isRequired,
}

const App = () => {
  return <HelloWorld greeting="Hello" name="Jack" />
}

ReactDOM.render(<App />, document.getElementById('react-root'))

// react components have to start with a capital letter (in TitleCase)
// and vanilla html should be in lowercase

// props
// cannot change

// state
// a component owns and can change

// functional components
// cannot have state

// class (or stateful) components
// can have state
