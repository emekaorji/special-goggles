// Styles
import styles from '../styles/nav.module.sass';
import baseStyles from '../styles/app.module.sass';

// Components
import { Googles, Logo } from './icon';

// React Hooks
import { useState, useEffect, useRef, useCallback } from 'react';
import Button from './button';

const Nav = ({ data, setData, setShouldLoadMore }) => {
	const initialData = useRef(data).current;
	const [inputValue, setInputValue] = useState('');
	const [buttonIsVisible, setButtonIsVisible] = useState(true);
	const [windowWidth, setWindowWidth] = useState(0);

	const search = useCallback(() => {
		if (inputValue) {
			setShouldLoadMore(false);
		} else {
			setShouldLoadMore(true);
		}

		const regex = new RegExp(`${inputValue}`, 'gi');

		const newData = initialData.filter((story) => regex.test(story.title));
		setData(newData);
	}, [inputValue, initialData, setData, setShouldLoadMore]);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		search();
	}, [inputValue, search]);

	return (
		<nav
			className={
				styles.nav + (buttonIsVisible ? ' ' + styles.inputFocused : '')
			}>
			<div className={baseStyles.container}>
				<div className={styles.logo}>
					<Logo width={40} height={40} />
				</div>
				<input
					type='text'
					name='posts'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='Search Post'
					onFocus={() => setButtonIsVisible(true)}
					onBlur={() => !inputValue && setButtonIsVisible(false)}
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
