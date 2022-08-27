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
import Header from '../components/header';
import ScrollToTop from '../components/scrollToTop';

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
	const [shouldLoadMore, setShouldLoadMore] = useState(true);

	const loadMoreData = useCallback(async () => {
		if (isBottomOfPage) {
			setIsLoading(true);
			const newResults = await getData(20, data.length);

			setData((prev) => prev.concat(newResults));
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
					window.innerHeight + window.scrollY >= app.scrollHeight - 200;

				if (!shouldLoadMore) return;
				if (isBottomOfPage) setIsBottomOfPage(true);
			});
		};

		return unsubscribe();
	}, [results]);

	useEffect(() => {
		loadMoreData();
	}, [isBottomOfPage, loadMoreData]);

	return (
		<>
			<Head>
				<title>Hacker News Posts | Find the latest tech posts</title>
			</Head>
			<Header />
			<Nav
				data={data}
				setData={setData}
				setShouldLoadMore={setShouldLoadMore}
			/>
			<Posts results={data} />
			<br />
			<br />
			{isLoading && <Loader width='5em' height='.1em' />}
			<ScrollToTop />
		</>
	);
}

export default Home;
