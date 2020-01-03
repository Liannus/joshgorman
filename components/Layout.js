import Head from "next/head";
import { Container } from "reactstrap";
import { Header, MainNavbar } from "components/partials/";
import "../style.css";

const Layout = props => (
  <div>
    <Header />
    <div
      style={{
        overflow: "hidden"
      }}
    >
      <MainNavbar /> {props.children}
    </div>
  </div>
);

export default Layout;
