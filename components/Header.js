import Link from 'next/link'
import Head from 'next/head'

const linkStyle = {
	marginRight: 15
}

const Header = () => (
	<>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
			<link href="https://vjs.zencdn.net/7.3.0/video-js.css" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css?family=Istok+Web:700" rel="stylesheet" />
		</Head>
	</>
)

export default Header
