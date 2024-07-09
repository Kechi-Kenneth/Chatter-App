import { Link } from "react-router-dom"

const SignUpPage = () => {
  return (
    <div>
    <h1>Sign Up</h1>
    <form>
      {/* Add your signup form fields here */}
    </form>
    <Link to="/">Back to Welcome</Link>
    <Link to="/signin">Already have an account? Sign In</Link>
  </div>
  )
}

export default SignUpPage
