import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Header component
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  console.log("Header2");

  // If no dependency array is passed, useEffect will run on every render
  /*
  useEffect(() => {
    console.log("useEffect Called Header");
  });
*/
  // If dependency array is passed but empty, then useEffect will run only on initial render
  /*
  useEffect(() => {
    console.log("useEffect Called Header");
  }, []);
*/
  // If dependency array is passed and contains some value, then useEffect will run only on initial render and on every re-render when the value of the dependency array changes.

  useEffect(() => {
    console.log("useEffect Called Header");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{useOnlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* In this case whole page is load */}
          {/* <li>
            <a href="/about">About</a>
          </li> */}
          {/* In this case the whole is not laod  it will only load the particular component only  */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="Login"
            onClick={() => {
              if (btnNameReact === "Login") {
                setbtnNameReact("Logout");
                console.log(btnNameReact);
              } else {
                setbtnNameReact("Login");
                console.log(btnNameReact);
              }
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
