import profile from "/profile.jpg";
import './Nav.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const userInfo = useSelector((state) => state.areaFinder.userInfo);

  return (
    <div className='nav'>
        <div className="nav-container">
            <Link to="/" className="link">
              <h1>spotta <span>me</span></h1>
            </Link>
            <div className="welcome">
              <Link to='/login' className="link">
                  {userInfo && userInfo.image ? (
                  <div className="welcomeMess">
                    <h4>Welcome!</h4>
                    <img src={userInfo.image} alt="user logo" />
                  </div>
                ) : (
                  <p>Login</p>
                )}
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Nav
