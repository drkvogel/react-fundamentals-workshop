import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Count extends Component {
  onButtonClick() {
    this.props.onIncrement()
  }

  render() {
    return (
      <div>
        <p>Count: {this.props.count}</p>
        <button onClick={this.onButtonClick.bind(this)}>Increment</button>
      </div>
    )
  }
}

Count.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counts: [0, 0, 0],
    }
  }

  incrementCount(countIndex) {
    this.setState(prevState => {
      const counts = [...prevState.counts] // spread operator to create a copy of the array instead of recreating it???
      counts[countIndex] = prevState.counts[countIndex] + 1

      return { counts: counts }
    })
  }

  render() {
    // TODO: generate the list of count components automatically
    // rather than hardcoding them
    // return (
    //   <div>
    //     <Count
    //       count={this.state.counts[0]}
    //       onIncrement={this.incrementCount.bind(this, 0)}
    //     />

    //     <Count
    //       count={this.state.counts[1]}
    //       onIncrement={this.incrementCount.bind(this, 1)}
    //     />
    //   </div>
    // )
    
    return (
      <div>
        {
          this.state.counts.map((count, index) => (
            <Count key={index} // for performant dom updates - react can e.g. reorder series of blog posts
              count={count}
              onIncrement={this.incrementCount.bind(this, index)}
            />
          ))
        }
      </div>
    )

    // or

    // const countElements = this.state.counts.map((count, index) => {
    //   <Count key={index}
    //     count={count}
    //     onIncrement={this.incrementCount.bind(this, index)}
    //   />
    // })

    // return <div>{countElements}</div>

    // TODO: once you do the above TODO, you'll see a warning in your console
    // where React tells you you're missing a key property. See if you can investigate...

    //   ..\..\node_modules\object - assign\index.js: 91 Warning: Each child in an array or iterator should have a unique "key" prop.
    // Check the render method of`Counter`.See https://fb.me/react-warning-keys for more information.
    // in Count(created by Counter)
    //   in Counter(created by App)
    //   in App
  }
}

const App = () => {
  return <Counter />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
