import YourDoctorLogo from "../YourDoctorLogo";
function GuestNav() {
  return (
    <header className="header">
      <YourDoctorLogo />
      <nav className="nav-bar">
        <ul>
          <li>
            <button className="nav-btn">Search</button>
          </li>
          <li>
            <button className="nav-btn" id="login_btn">
              Login
            </button>
          </li>
          <li>
            <button className="nav-btn" id="signup_btn">
              Signup
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default GuestNav;
