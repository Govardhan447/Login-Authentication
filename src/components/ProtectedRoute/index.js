import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = prop => {
  const accesToken = Cookies.get('jwt_token')

  if (accesToken === undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...prop} />
}

export default ProtectedRoute
