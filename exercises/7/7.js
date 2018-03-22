import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// this.setState async???

class Counter extends Component {
  constructor(props) {
    super(props) // boilerplate

    this.state = {
      // count: 0,
      count: props.start,
    }
  }

  onButtonClickIncrement() {
    this.setState(prevState => { // async, multiple calls will be batched by react
        // can take a callback
      return { count: prevState.count + 1 }
    })
  }

  onButtonClickDecrement() {
    this.setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }

  render() {
    // TODO: add another button that decrements the count
    return (
      <div>
        <p>current count: {this.state.count}</p>
        <button onClick={this.onButtonClickIncrement.bind(this)}> 
          Click to increment
        </button>
        <button onClick={this.onButtonClickDecrement.bind(this)}> 
          Click to decrement
        </button>
      </div>
    )
  }
}

// bind(this) necessary
// we have to bind to ensure the right scope within the event handler

// TODO: make the counter component take a prop that configures the starting value
// so I could do <Counter start={4} /> to start the counter at 4
// remember to document it with prop types!
// const App = () => {
//   return <Counter />
// }
const App = props => {
  return <Counter start={props.start}/>
}

App.propTypes = {
  start: PropTypes.number
}

App.defaultProps = {
  start: 3
}

ReactDOM.render(<App />, document.getElementById('react-root'))
