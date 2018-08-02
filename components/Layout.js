import Header from './Header.js'
import { Container } from 'reactstrap';

const Layout = (props) => (
	<div class="Container page">
		<header />
		{props.children}
	</div>
)

export default Layout
