import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import AuthContext from './auth-context'

// TODO:
// using <AuthContext.Provider>, hook this component up to the AuthContext
// and only allow the user to like a post if they are signed in.
export default class UserActions extends Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
  }

  state = {
    liked: false,
  }

  like = () => this.setState({ liked: true })

  render() {
    return (
      <div>
        {/* TODO: can you disable the button if the user has liked the post?*/}
        <AuthContext.Consumer>
          { signedIn => {
            return signedIn ?
            (
              <Fragment>
                {/* <button onClick={this.props.signedIn ? this.like : null}> */}
                <button onClick={this.props.signedIn} disabled={this.state.liked}>
                ❤
                </button>
                {/* {this.state.liked && <span>You've liked this post!</span>} */}
              </Fragment>
            ) : (
              <Fragment>
                
              </Fragment>
            )
          }}
        </AuthContext.Consumer>
      </div>
    )
  }
}
