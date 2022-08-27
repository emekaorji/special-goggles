// Styles
import styles from '../styles/nav.module.sass';
import baseStyles from '../styles/app.module.sass';

// Components
import { Googles, Logo } from './icon';

// React Hooks
import { useState, useEffect, useRef, useCallback } from 'react';
import Button from './button';

// Functions
import { useData } from '../context/dataContext';

const Nav = ({ data, setData }) => {
	const initialData = useRef(data).current;
	const [inputValue, setInputValue] = useState('');
	const [inputIsFocused, setInputIsFocused] = useState(true);
	const [windowWidth, setWindowWidth] = useState(0);

	const search = useCallback(() => {
		const regex = new RegExp(`${inputValue}`, 'gi');

		const newData = initialData.filter((story) => regex.test(story.title));
		setData(newData);
	}, [inputValue]);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		search();
	}, [inputValue]);

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
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='Search Post'
					onFocus={() => setInputIsFocused(true)}
					onBlur={() => setInputIsFocused(false)}
				/>
				<div className={styles.buttonContainer}>
					{windowWidth > 900 ? (
						<Button onClick={search}>Search</Button>
					) : (
						<button onClick={search} className={styles.mobileButton}>
							<Googles width={24} height={24} color='#fff' />
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Nav;
