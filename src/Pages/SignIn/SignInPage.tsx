import { Link, useNavigate } from "react-router-dom";
import "./SignInPage.css";
import { useState } from "react";

const SignInPage: React.FC = () => {
  const [isFormVisble, setIsFormVisible] = useState<boolean>(false);

  const handleToggleButtonClick = () => {
    setIsFormVisible(!isFormVisble);
  };
  const navigate = useNavigate();
  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform sign-in logic here, e.g., API call to authenticate user
    // If sign-in is successful, navigate to the main page
    navigate("/main");
  };

  return (
    <div className="container">
      <Link to="/">
        <p className="back-symbol">
          <img src="icons8-left-arrow-50.png" alt="" />
        </p>
      </Link>
      <h1 className="sign-in-title">Sign In</h1>
      <div className="social-buttons">
        <button>
          <span>
            <img src="" alt="" />
          </span>
          Login with facebook
        </button>
        <button>
          {" "}
          <span>
            <img src="" alt="" />
          </span>
          Login with google
        </button>

        <button onClick={handleToggleButtonClick}>
          <span>
            <img src="" alt="" />
          </span>{" "}
          Login with Email or Number
        </button>
        {isFormVisble && (
          <form className="form" onSubmit={handleSignIn}>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email or Number"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="confirmPassword"
                placeholder="confirm Password"
                name="confirmPassword"
                required
              />
            </div>
            <button className="toggle-signin" type="submit">
              Sign In
            </button>
          </form>
        )}
      </div>
      <p className="sign-up">Don't have an Account?</p>
      <Link to="/welcome">
        <p className="sign-up">Sign Up </p>
      </Link>
    </div>
  );
};

export default SignInPage;
