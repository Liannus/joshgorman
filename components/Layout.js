import Header from './Header'
import Head from 'next/head'
import { Container } from 'reactstrap';

const Layout = (props) => (
	<div>
		<Head>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
			<link href="https://vjs.zencdn.net/7.3.0/video-js.css" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css?family=Istok+Web:700" rel="stylesheet" />
		</Head>
		<div className="Container" style={{"overflow": "hidden"}}>
			<Header />
			{props.children}
		</div>
	</div>
)

export default Layout
