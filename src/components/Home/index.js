import LogoutButton from '../LogoutButton'
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="bg-container">
    <div className="home-container">
      <Header />
      <h1 className="heading">Home</h1>
      <LogoutButton />
    </div>
  </div>
)
export default Home
