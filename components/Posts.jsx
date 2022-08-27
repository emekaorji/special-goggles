import baseStyles from '../styles/app.module.sass';
import styles from '../styles/posts.module.sass';

const Posts = ({ results }) => {
	return (
		<div className={baseStyles.container + ' ' + styles.postsContainer}>
			<div id='scrollPosition'></div>
			{results.map((story, index) => (
				<a
					key={index}
					href={story.url}
					target='_blank'
					rel='noreferrer'
					className={styles.post}>
					<h2>{story.title}</h2>
					<em>
						Posted By: {story.by} at{' '}
						{new Date(parseInt(story.time) * 1000).toLocaleString()}
					</em>
				</a>
			))}
		</div>
	);
};

export default Posts;
