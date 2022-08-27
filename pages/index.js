// Styles
import styles from '../styles/app.module.sass';

// Components
import Posts from '../components/Posts';

// React Hooks
import { useCallback, useEffect, useState } from 'react';

// Functions
import { getData } from '../utils/dataHandler';
import Head from 'next/head';
import Nav from '../components/nav';
import Loader from '../components/loader';

export const getServerSideProps = async () => {
	const results = await getData(20);

	return {
		props: {
			results,
		},
	};
};

function Home({ results }) {
	const [data, setData] = useState(results);
	const [isBottomOfPage, setIsBottomOfPage] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const loadMoreData = useCallback(async () => {
		if (isBottomOfPage) {
			setIsLoading(true);
			// const newResults = await getData(20, data.length);

			// setData((prev) => prev.concat(newResults));
			setIsBottomOfPage(false);
			setIsLoading(false);
		}
	}, [isBottomOfPage]);

	useEffect(() => {
		const unsubscribe = () => {
			if (results.length >= 124) return;
			window.addEventListener('scroll', () => {
				const app = document.getElementById('app');
				const isBottomOfPage =
					window.innerHeight + window.scrollY >= app.scrollHeight - 100;

				if (isBottomOfPage) setIsBottomOfPage(true);
			});
		};

		return unsubscribe();
	}, [results]);

	useEffect(() => {
		loadMoreData();
	}, [isBottomOfPage]);

	return (
		<>
			<Head>
				<title>Hacker News Posts | Find the latest tech posts</title>
			</Head>
			<Nav data={data} setData={setData} />
			<Posts results={data} />
			{isLoading && <Loader width='5em' />}
		</>
	);
}

export default Home;
