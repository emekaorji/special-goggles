import baseStyles from '../styles/app.module.sass';
import styles from '../styles/posts.module.sass';
import { Results } from '../typesAndInterfaces/homePageTypes';

const Posts: React.FC<Results> = ({ results }) => {
	return (
		<div className={baseStyles.container + ' ' + styles.postsContainer}>
			{results.map((story, index) => (
				<a key={index} href={story.url} className={styles.post}>
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
