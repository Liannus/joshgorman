import Header from './Header'
import Head from 'next/head'
import { Container } from 'reactstrap';

const Layout = (props) => (
	<div>
		<Head>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
		</Head>
		<div className="Container" style={{"overflow": "hidden"}}>
			<Header />
			{props.children}
		</div>
	</div>
)

export default Layout
