// Styles
import styles from '../styles/app.module.sass';

// Types
import type { GetServerSideProps, NextPage } from 'next';
import type { Results } from '../typesAndInterfaces/homePageTypes';

// Components
import Nav from '../components/nav';
import Footer from '../components/footer';
import Posts from '../components/Posts';

// React Hooks
import { useEffect, useState } from 'react';

// Functions
import { getData } from '../utils/dataHandler';

export const getServerSideProps: GetServerSideProps = async () => {
	const results = await getData(20);

	return {
		props: {
			results,
		},
	};
};

const Home: NextPage<Results> = ({ results }) => {
	const [data, setData] = useState(results);
	const [isBottomOfPage, setIsBottomOfPage] = useState(false);

	useEffect(() => {
		const unsubscribe = () => {
			if (results.length >= 124) return;
			window.addEventListener('scroll', () => {
				const app = document.getElementById('app');
				const isBottomOfPage =
					window.innerHeight + window.scrollY >= app!.scrollHeight - 100;

				console.log(isBottomOfPage);
				if (isBottomOfPage) setIsBottomOfPage(true);
			});
		};

		return unsubscribe();
	}, [results]);

	const loadMoreData = async () => {
		if (isBottomOfPage) {
			const newResults = await getData(20, data.length);

			setData((prev) => prev.concat(newResults));
			setIsBottomOfPage(false);
		}
	};

	useEffect(() => {
		loadMoreData();
	}, [isBottomOfPage]);

	return (
		<>
			<Posts results={data} />
		</>
	);
};

export default Home;
