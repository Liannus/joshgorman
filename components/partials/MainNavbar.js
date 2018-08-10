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
          <Navbar light expand="sm">
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="justify-content-center dark" isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Resume</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <style jsx global>{`
            @keyframes fadein {
              from { opacity: 0; }
              to   { opacity: 1; }
            }
            .navbar {
              background-color: white;
            }
            .navbar .navbar-toggler {

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
              background-color: white;
            }
            .navbar .navbar-nav .nav-link {
              color: grey;
              border-radius: .25rem;
              margin: 0 0.25em;
              text-align: center;
            }
            .navbar .navbar-nav .nav-link:not(.disabled):hover,
            .navbar .navbar-nav .nav-link:not(.disabled):focus {
              color: #ffbbbc;
            }
            @media (max-width: 576px) {
              .navbar .navbar-toggler {
                animation: fadein 1s;
              }
            }
            @media (min-width: 576px) {
              .navbar .navbar-nav .nav-link {
                animation: fadein 1s;
              }
            }
          `}</style>
        </div>
      );
    }
  }
