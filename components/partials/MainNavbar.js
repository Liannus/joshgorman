import React from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

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
            <button type="button" className={`navbar-toggle mr-2 ${this.state.collapsed}`} onClick={this.toggleNavbar}>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Collapse id="navbar-collapse" className="justify-content-right dark" isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
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
          <style jsx global>{`
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
              background-color: red;
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
              color: white;
              border-radius: .25rem;
              margin: 0 0.25em;
              text-align: center;
              font-size: 1em;
              z-index: -1;
            }
            .navbar .navbar-nav .nav-link:not(.disabled):hover,
            .navbar .navbar-nav .nav-link:not(.disabled):focus {
              color: #bcbcbc;
            }
            @media (min-width: 576px) {
              .navbar {
                background-color: transparent;
                position: absolute !important;
                width: 100%;
                z-index: 1;
              }
            }
            /*
            @keyframes fadein {
              from { opacity: 0; }
              to   { opacity: 1; }
            }
            @media (min-width: 576px) {
              .navbar {
                background-color: transparent;
                position: absolute;
                width: 100%;
                z-index: 1;
              }
            }
            .navbar {
              background-color: transparent;
              position: absolute;
              width: 100%;
              z-index: 1;
            }
            .navbar .navbar-toggler {
                background-color: transparent;
            }
            .navbar-toggler:hover {
              color: red;
              background-color: #efefef;
            }
            .navbar .navbar-toggler .icon-bar {
              background-color: red;
              color: red;
            }
            .navbar .navbar-nav {
              background-color: transparent;
            }
            .navbar .navbar-nav .nav-link {
              color: white;
              border-radius: .25rem;
              margin: 0 0.25em;
              text-align: center;
              font-size: 1.5em;
            }
            .navbar .navbar-nav .nav-link:not(.disabled):hover,
            .navbar .navbar-nav .nav-link:not(.disabled):focus {
              color: #bcbcbc;
            }
            */
            @media (min-width: 576px) {
              .navbar .navbar-toggle {
                display: none;
              }
            }
            /*
            @media (min-width: 576px) {
              .navbar .navbar-nav .nav-link {
                animation: fadein 1s;
              }
            }
            */
          `}</style>
        </div>
      );
    }
  }
