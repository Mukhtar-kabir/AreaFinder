import './Login.css'
import googlePNG from "/googleIcon.png"
import facebookPNG from "/facebook.png"
import applePNG from "/apple.png"
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from 'react';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {addUser} from "../../redux/areaFinderSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );

        setTimeout(() => {
          navigate("/review");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='login'>
        <div className="login-container">
          <h2>Login</h2>
          <div className="input">
            <input type="email" placeholder='E-mail' />
              <div className="password">
              <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='password'
                  required
                />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className={`password-toggle ${showPassword ? "visible" : ""}`}
              >
                {showPassword ? (
                  <FaRegEye />
                ) : (
                  <FaRegEyeSlash />
                )}
              </span>
            </div>
            <button>Login</button>

            <div className="google" onClick={handleGoogleLogin}>
              <img src={googlePNG} alt="" />
              <p>Log in with Google</p>
            </div>

            <div className="google">
              <img src={facebookPNG} alt="" />
              <p>Log in with Facebook</p>
            </div>

            <div className="google">
              <img src={applePNG} alt="" />
              <p>Log in with Apple</p>
            </div>

            <span>
              <Link to="" className=' '>
                <p className='link'>Forgot your password?</p>
              </Link>
            </span>

            <p>Don't have an account? <span>
              <Link to="" className=' '>
                <span className='link'>Sign Up</span>
              </Link>
            </span></p>
          </div>
        </div>
    </div>
  )
}

export default Login;
