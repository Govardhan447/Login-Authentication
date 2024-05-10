import {Cookies} from 'js-cookie'
import {Component} from 'react'
import './index.css'

class Login extends Component {
  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 20})
    const {history} = this.props
    history.replace('/')
  }

  getHomeRoute = async () => {
    console.log('submitted')
    const options = {
      method: 'POST',
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      console.log('success')
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    return (
      <div className="bg-container">
        <h1>Please Login</h1>
        <button className="login-btn" type="button" onClick={this.getHomeRoute}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}
export default Login
