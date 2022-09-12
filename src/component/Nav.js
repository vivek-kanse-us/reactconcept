import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
const Nav = () => {
    return (
       <header>
          <ul>
            <li>
                <NavLink
                to="/"
                className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
                }
                >
                Home
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/stopwatch"
                className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
                }
                >
                Stopwatch
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/counter"
                className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
                }
                >
                counter
                </NavLink>
            </li>
           
            <li>
                <NavLink
                to="/ref"
                className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
                }
                >
                Reference
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/bform"
                className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
                }
                >
                Basic Form
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/fancyform"
                className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
                }
                >
                Fancy Form
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/listitem"
                className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")
                }
                >
                List Item
                </NavLink>
            </li>
          </ul>
       </header>
     
    )
}
export default Nav;