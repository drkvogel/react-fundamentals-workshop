import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'so-fetch-js'

class Post extends Component {
  state = {
    userPostInput: '',
    searchId: null,
  }

  userInputChange = e => {
    console.log('got user input value', e.target.value)
    // TODO: update the userPostInput state with the new value when the user types
    this.setState({userPostInput: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()
    console.log('got form submit!')
    // TODO: update the searchID state with the latest user post ID when the form is submitted
    // this.setState({searchId: e.target.value})
    // this.state.searchId = e.target.value
    this.setState({ searchId: this.state.userPostInput })
  }

  clearInput = e => {
    this.setState({userPostInput: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="search-form">
          <label>
            Please enter the ID of a post
            <input
              type="text"
              name="post-id"
              value={this.state.userPostInput}
              onChange={this.userInputChange}
            />
          </label>
          <button type="submit">Go</button>
          {/* TODO: add another button that clears out the user input value */}
          <button type="button" onClick={this.clearInput}>Clear</button> {// type="button" so it doesn't submit 
          }
        </form>

        {this.state.searchId && (
          <p>The ID you searched for is: {this.state.searchId}</p>
        )}
      </div>
    )
  }
}

const App = () => {
  return <Post />
}

ReactDOM.render(<App />, document.getElementById('react-root'))

//??? check github results