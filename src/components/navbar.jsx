import React from "react";

class NavBar extends React.Component {
  state = {
    login: true,
  };

  buttonLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  render() {
    const { login } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          Todo List{" "}
          <button className="btn btn-danger btn-sm" onClick={this.buttonLogOut}>
            {login ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
