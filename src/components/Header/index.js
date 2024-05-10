import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="header-container">
    <Link to="/">
      <li className="link">Home</li>
    </Link>
    <Link to="/about">
      <li>About</li>
    </Link>
  </ul>
)

export default Header
