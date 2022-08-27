// Styles
import styles from '../styles/nav.module.sass';
import baseStyles from '../styles/app.module.sass';

// Components
import { Logo } from './icon';

// React Hooks
import { useState } from 'react';
import Button from './button';

const Nav: React.FC = () => {
	const [inputIsFocused, setInputIsFocused] = useState(false);

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
					<Button>Search</Button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
