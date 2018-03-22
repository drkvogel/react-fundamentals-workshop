import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// notice that Count has no idea who its parent is
const Count = props => {
  return <p>Count: {props.count}</p>
}

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // count: 0,
      count: props.start
    }
  }

  onButtonClickIncrement() {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    // TODO: add two more count components
    // one that shows the next value below and another that
    // shows the next value up from the current count
    return (
      <div>
        <Count count={this.state.count - 1} />
        <Count count={this.state.count} />
        <Count count={this.state.count + 1} />
        <button onClick={this.onButtonClickIncrement.bind(this)}>
          Click to increment
        </button>
      </div>
    )
  }
}

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
  start: PropTypes.number,
}

App.defaultProps = {
  start: 4,
}

ReactDOM.render(<App />, document.getElementById('react-root'))
