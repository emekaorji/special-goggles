const getData = async (dataAmount, dataRange = 1) => {
	const dataArray = [];

	for (let index = 0; index < dataAmount; index++) {
		// 124
		const response = await fetch(
			`https://hacker-news.firebaseio.com/v0/item/${index + dataRange}.json`
		);

		const data = await response.json();

		if (data.url) {
			dataArray.push(data);
		}
	}

	return dataArray;
};

export { getData };
