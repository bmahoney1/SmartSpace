import './loginPage.css';

export default function LoginPage() {
  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <p className="description">Sign in to access your account and start designing.</p>
      <form className="form">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="input"
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="input"
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <button type="submit" className="button">
            Log In
          </button>
        </div>
      </form>
      <p className="signupLink">
        Don't have an account?{' '}
        <a href="/signup">
          Sign up instead
        </a>
      </p>
    </div>
  );
}
