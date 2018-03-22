import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './post'
import UserInput from './input'

// Render functions / Render props

// PostOutput.propTypes = {
//   post: PropTypes.shape({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     body: PropTypes.string,
//   }),
// }

const PostOutput = props => {
  return props.post ? <div>post:{props.post}</div> : <div>Loading...</div>
}

class PostSearch extends Component {
  state = {
    searchId: 1,
  }

  onSubmit = id => {
    this.setState({ searchId: id })
  }

  render() {
    return (
      <div>
        <UserInput onSearchInputChange={this.onSubmit} />
        {/* TODO: update this render function to output the post if we have one
             or render "Loading" if we don't have a post
            */}
        {/* <Post id={this.state.searchId} render={() => null} /> */}
          <Post id={this.state.searchId} render={post => (post ? (<p>{post}</p>) : (<p>Loading...</p>))} />
            {
              
              // post ? (<div>
          //   <span>Loaded post id: {post.id}</span>
          //   <span>Title: {post.title}</span>
          //   <span>Title: {post.body}</span>
          // </div>) : (
            //   <p>Loading...</p>
          // )

            }

        } />
        {/* TODO: once you've done that, pull that logic into a PostOutput component
        * (hint: you'll find the prop types above) and use that within the render func
        */}

      </div>
    )
  }
}

// class PostOutput extends Component {
//   static propTypes = {
//       post: PropTypes.shape({
//       id: PropTypes.number,
//       title: PropTypes.string,
//       body: PropTypes.string,
//     }),
//   }
// }

// PostOutput.propTypes = {
//   post: PropTypes.shape({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     body: PropTypes.string,
//   }),
// }


const App = () => {
  return <PostSearch />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
