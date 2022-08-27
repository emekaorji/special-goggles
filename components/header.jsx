import React from 'react';
import styles from '../styles/header.module.sass';
import baseStyles from '../styles/app.module.sass';

function Header() {
	return (
		<header className={styles.header + ' ' + baseStyles.container}>
			<h1>Get the latest posts in Tech</h1>
			<p>
				Courtesy of <a href='https://news.ycombinator.com/'>HackerNews</a>
			</p>
		</header>
	);
}

export default Header;
