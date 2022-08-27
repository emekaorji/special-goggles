import styles from '../styles/button.module.sass';

interface buttonChild {
	children: string | JSX.Element;
}

const Button: React.FC<buttonChild> = ({ children, ...props }) => (
	<button className={styles.button} {...props}>
		<div className={styles.behindText}>{children}</div>
		<div className={styles.frontFace}>
			<div className={styles.frontText}>{children}</div>
		</div>
	</button>
);

export default Button;
