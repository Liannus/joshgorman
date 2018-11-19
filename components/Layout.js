import Header from './Header'
import Head from 'next/head'
import { Container } from 'reactstrap';
import MainNavbar from './partials/MainNavbar.js'
import '../style.css'

const Layout = (props) => (
	<div>
		<Header />
		<div className="Container" style={{"overflow": "hidden"}}>
			<MainNavbar />
			{props.children}
		</div>
	</div>
)

export default Layout
