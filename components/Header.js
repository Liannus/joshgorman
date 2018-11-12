import Link from 'next/link'
import MainNavbar from './partials/MainNavbar'

const linkStyle = {
	marginRight: 15
}

const Header = () => (
	<div>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<MainNavbar />
	</div>
)

export default Header
