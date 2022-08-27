import Footer from './footer';
import Nav from './nav';

const Layout = ({ children }) => {
	return (
		<div id='app'>
			<Nav />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
