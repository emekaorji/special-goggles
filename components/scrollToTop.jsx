import React, { useCallback, useEffect, useState } from 'react';
import { UpArrow } from './icon';
import styles from '../styles/scrollToTop.module.sass';
import baseStyles from '../styles/app.module.sass';

function ScrollToTop() {
	const [buttonIsVisible, setButtonIsVisible] = useState(false);

	const handleButtonVisibility = useCallback(() => {
		if (window.scrollY > 650) {
			setButtonIsVisible(true);
		} else {
			setButtonIsVisible(false);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleButtonVisibility);

		return () => window.removeEventListener('scroll', handleButtonVisibility);
	}, [handleButtonVisibility]);

	const scrollToFirstPost = () => {
		const nav = document.getElementById('scrollPosition');

		nav.scrollIntoView();
	};

	return (
		<div className={baseStyles.container + ' ' + styles.container}>
			<button
				className={
					styles.button + (buttonIsVisible ? ' ' + styles.buttonIsVisible : '')
				}
				onClick={scrollToFirstPost}>
				<UpArrow width={24} height={24} color='#fff' />
			</button>
		</div>
	);
}

export default ScrollToTop;
