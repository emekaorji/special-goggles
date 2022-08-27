import Footer from './footer';

const Layout = ({ children }) => {
	return (
		<div id='app'>
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
