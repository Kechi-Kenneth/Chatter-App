import { Link, useNavigate } from "react-router-dom"

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
const handleSignIn = (event: React.FormEvent) =>{
  event.preventDefault();
 // Perform sign-in logic here, e.g., API call to authenticate user
    // If sign-in is successful, navigate to the main page
    navigate('/main');

}
  return (
    <div>
    <h1>Sign In</h1>
    <form onSubmit={handleSignIn}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Sign In</button>
    </form>
    <Link to="/">Back to Welcome</Link>
    <Link to="/signup">Don't have an account? Sign Up</Link>
  </div>
  )
}

export default SignInPage
