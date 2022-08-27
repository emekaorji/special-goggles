import styles from '../styles/button.module.sass';

function Button({ children, ...props }) {
	return (
		<button className={styles.button} {...props}>
			<div className={styles.behindText}>{children}</div>
			<div className={styles.frontFace}>
				<div className={styles.frontText}>{children}</div>
			</div>
		</button>
	);
}

export default Button;
