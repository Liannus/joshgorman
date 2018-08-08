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
            .navbar {
              transition: height 2s;
              height: 50px;
              background-color: #ffbbbc;
            }
            .navbar .navbar-nav {
              background-color: #ffbbbc;
            }
            .navbar .navbar-nav .nav-link {
              color: #ecf0f1;
              border-radius: .25rem;
              margin: 0 0.25em;
              text-align: center;
            }
            .navbar .navbar-nav .nav-link:not(.disabled):hover,
            .navbar .navbar-nav .nav-link:not(.disabled):focus {
              color: #ffbbbc;
            }

            @media (min-width: 575px) {
              .navbar {
                -webkit-transition: height 2s;
                transition: height 2s;
                height: 50px;
              }
            }

            @media (min-width: 767px) {
              .navbar {
                -webkit-transition: height 2s;
                transition: height 2s;
                height: 90px;
              }
            }

            @media (min-width: 991px) {
              .navbar {
                -webkit-transition: height 2s;
                transition: height 2s;
                height: 50px;
              }
            }

            @media (min-width: 1199px) {

            }
          `}</style>
        </div>
      );
    }
  }
