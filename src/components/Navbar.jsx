const Navbar = ({ theme, changeTheme }) => {
  return (
    <nav className={theme ? "navbar bg-dark" : "navbar bg-primary shadow"}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-light">Todo-App-React</span>
        <span className="navbar-brand mb-0 h1 text-light">2.0 <button className={theme ? "btn btn-primary rounded-0 btn-sm ms-2" : "btn btn-dark rounded-0 btn-sm ms-2"} onClick={() => changeTheme()}>{theme ? "Light Mode" : "Dark Mode"}</button></span>
      </div>
    </nav>
  )
};

export default Navbar;