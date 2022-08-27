import styles from '../styles/button.module.sass';

const Button = ({ children, ...props }) => (
	<button className={styles.button} {...props}>
		<div className={styles.behindText}>{children}</div>
		<div className={styles.frontFace}>
			<div className={styles.frontText}>{children}</div>
		</div>
	</button>
);

export default Button;
