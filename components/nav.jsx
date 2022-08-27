// Styles
import styles from '../styles/nav.module.sass';
import baseStyles from '../styles/app.module.sass';

// Components
import { Googles, Logo } from './icon';

// React Hooks
import { useState, useEffect } from 'react';
import Button from './button';

const Nav = () => {
	const [inputIsFocused, setInputIsFocused] = useState(true);
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	return (
		<nav
			className={
				styles.nav + (inputIsFocused ? ' ' + styles.inputFocused : '')
			}>
			<div className={baseStyles.container}>
				<div className={styles.logo}>
					<Logo width={48} height={48} />
				</div>
				<input
					type='text'
					name='posts'
					placeholder='Search Post'
					onFocus={() => setInputIsFocused(true)}
					onBlur={() => setInputIsFocused(false)}
				/>
				<div className={styles.buttonContainer}>
					{windowWidth > 900 ? (
						<Button>Search</Button>
					) : (
						<button className={styles.mobileButton}>
							<Googles width={24} height={24} color='#fff' />
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Nav;
