import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signIn, signOut } from '../actions/index'

class GoogleAuth extends Component {

   componentDidMount() {
      window.gapi.load('client:auth2', () => {
         window.gapi.client
            .init({
               clientId: '353815490865-dgbh1g63ogd45rg8tmcjg9f999oorcfl.apps.googleusercontent.com',
               scope: 'email',
            })
            .then(() => {
               this.auth = window.gapi.auth2.getAuthInstance()
               this.onAuthChanged(this.auth.isSignedIn.get())
               this.auth.isSignedIn.listen(this.onAuthChanged)
            })
      })
   }

   onAuthChanged = (isSignedIn) => {
      if (isSignedIn) {
         this.props.signIn(this.auth.currentUser.get().getId())
      } else {
         this.props.signOut()
      }
   }

   onSignInClicked = () => {
      this.auth.signIn()
   }

   onSignOutClicked = () => {
      this.auth.signOut()
   }

   renderAuthButton() {
      if (this.props.isSignedIn === null) {
         return null
      } else if (this.props.isSignedIn) {
         return (
            <button onClick={this.onSignOutClicked} className='ui red google button'>
               <i className='google icon'></i>
               Sign Out
            </button>
         )
      } else {
         return (
            <button onClick={this.onSignInClicked} className='ui red google button'>
               <i className='google icon'></i>
               Sign In With Google
            </button>
         )
      }
   }

   render() {
      return <div>{this.renderAuthButton()}</div>
   }
}

const mapStateToProps = (state) => {
   return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
