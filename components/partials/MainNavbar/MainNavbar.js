import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar expand="sm">
          <button
            type="button"
            className={`navbar-toggle mr-2 ${this.state.collapsed}`}
            onClick={this.toggleNavbar}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Collapse
            id="navbar-collapse"
            className="justify-content-right dark"
            isOpen={!this.state.collapsed}
            navbar="navbar"
          >
            <Nav navbar="navbar">
              <NavItem>
                <NavLink href="#AboutMe">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Portfolio">PORTFOLIO</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Education">EDUCATION</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Experience">EXPERIENCE</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <style jsx="jsx" global="global">
          {`
            html {
              scroll-behavior: smooth;
            }
            .navbar-toggle {
              border: none;
              background: transparent !important;
              padding: 9px 10px;
            }

            .navbar-toggle:hover {
              background: transparent !important;
            }

            .navbar-toggle .icon-bar {
              width: 22px;
              -webkit-transition: all 0.2s;
              transition: all 0.2s;
              display: block;
              background-color: #fcfaf9;
              height: 2px;
              border-radius: 1px;
            }

            /* ANIMATED X */
            .navbar-toggle .icon-bar:nth-of-type(1) {
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
              -webkit-transform-origin: 10% 10%;
              -ms-transform-origin: 10% 10%;
              transform-origin: 10% 10%;
            }

            .navbar-toggle .icon-bar:nth-of-type(2) {
              opacity: 0;
              filter: alpha(opacity=0);
              margin-top: 4px;
            }

            .navbar-toggle .icon-bar:nth-of-type(3) {
              -webkit-transform: rotate(-45deg);
              -ms-transform: rotate(-45deg);
              transform: rotate(-45deg);
              -webkit-transform-origin: 10% 90%;
              -ms-transform-origin: 10% 90%;
              transform-origin: 10% 90%;
              margin-top: 4px;
            }

            /* ANIMATED X COLLAPSED */
            .navbar-toggle.true .icon-bar:nth-of-type(1) {
              -webkit-transform: rotate(0);
              -ms-transform: rotate(0);
              transform: rotate(0);
            }

            .navbar-toggle.true .icon-bar:nth-of-type(2) {
              opacity: 1;
              filter: alpha(opacity=100);
            }

            .navbar-toggle.true .icon-bar:nth-of-type(3) {
              -webkit-transform: rotate(0);
              -ms-transform: rotate(0);
              transform: rotate(0);
            }

            .navbar .navbar-nav .nav-link {
              text-shadow: 2px 2px 3px #444;
              color: #fcfaf9;
              border-radius: 0.25rem;
              margin: 0 0.25em;
              text-align: center;
              font-size: 1em;
              z-index: -1;
              font-weight: 700;
              letter-spacing: 0.5px;
            }
            .navbar .navbar-nav .nav-link:not(.disabled):focus,
            .navbar .navbar-nav .nav-link:not(.disabled):hover {
              color: #bcbcbc;
            }
            @media (min-width: 576px) {
              .navbar {
                background-color: transparent !important;
                background-image: linear-gradient(
                  to bottom,
                  rgba(180, 180, 180, 0.8) 30%,
                  rgba(255, 0, 0, 0)
                );
                position: absolute !important;
                width: 100%;
                z-index: 1;
              }
            }
            .navbar {
              background-color: #242b30;
            }
            @media (min-width: 576px) {
              .navbar .navbar-toggle {
                display: none;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
