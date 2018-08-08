import React from 'react';
import { Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

  export default class MainNavbar extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <Navbar expand="md">
              <Nav className="ml-auto" navbar>
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
          </Navbar>
          <style jsx global>{`
            .navbar {
              background-color: #b52c2c;
            }

            .navbar .navbar-nav .nav-link {
              color: #ecf0f1;
              border-radius: .25rem;
              margin: 0 0.25em;
            }
            .navbar .navbar-nav .nav-link:not(.disabled):hover,
            .navbar .navbar-nav .nav-link:not(.disabled):focus {
              color: #ffbbbc;
            }

            @media (max-width: 575px) {

            }

            @media (max-width: 767px) {

            }

            @media (max-width: 991px) {

            }

            @media (max-width: 1199px) {

            }
          `}</style>
        </div>
      );
    }
  }
