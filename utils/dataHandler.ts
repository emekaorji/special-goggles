import type { PostData } from '../typesAndInterfaces/homePageTypes';

const getData = async (dataAmount: number, dataRange: number = 1) => {
	const dataArray: Array<object> = [];

	for (let index = 0; index < dataAmount; index++) {
		// 124
		const response = await fetch(
			`https://hacker-news.firebaseio.com/v0/item/${index + dataRange}.json`
		);

		const data: PostData = await response.json();

		if (data.url) {
			dataArray.push(data);
		}
	}

	return dataArray;
};

export { getData };
