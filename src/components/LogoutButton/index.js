import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

class LogoutButton extends Component {
  getLoginForm = () => {
    Cookies.remove('jwt-token')
    const {history} = this.props
    return history.replace('/login')
  }

  render() {
    return (
      <div className="btn-logout">
        <button className="button" type="button" onClick={this.getLoginForm}>
          Logout
        </button>
      </div>
    )
  }
}
export default withRouter(LogoutButton)
