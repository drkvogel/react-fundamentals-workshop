import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'so-fetch-js'

// new Post().state
// Post.propTypes

class Post extends Component {
  static propTypes = {  // class variable, like in Java
    id: PropTypes.number.isRequired,
  }

  state = {
    post: null,
  }

  componentDidMount() {
    const urlForPost = `https://jsonplaceholder.typicode.com/posts/${
      this.props.id
    }`

    fetch(urlForPost).then(response => {
      const post = response.data
      // TODO: put this post into the state
      console.log('I got the post!', post)
      // this.state.post = this.post
      // this.state.post = post // no
      // this.setState({post: post})
      this.setState({post}) // syntactic sugar when key name is the same as the variable name
    })
  }

  render() {
    // TODO: return something other than "null" when we don't have a post
    // if (!this.state.post) return null
    if (!this.state.post) return (
      <div>
        <h1>No posts to show</h1>
        <p>Sorry about that.</p>
      </div>
    )

    // {this.state.post === null && <div>Loading...</div>}

    // render() {
    //   return this.state.post ? ( // ternary operator
    //     <div>
    //       <h1>
    //         // ...
    //       </h1>
    //       // ...
    //     </div>
    //   ) : (
    //     <div>Loading...</div>
    //   )
    // }

    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <p>{this.state.post.body}</p>
      </div>
    )
  }
}

const App = () => {
  return <Post id={1} />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
