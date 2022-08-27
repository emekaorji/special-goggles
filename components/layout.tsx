import React, { PropsWithChildren } from 'react';
import Footer from './footer';
import Nav from './nav';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div id='app'>
			<Nav />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
