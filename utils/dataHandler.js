const getData = async (dataAmount, dataRange = 1) => {
	const dataArray = [];

	const response = await fetch(
		`https://hacker-news.firebaseio.com/v0/newstories.json`
	);
	const newStories = await response.json();

	for (let index = 0; index < dataAmount; index++) {
		// 124

		const response = await fetch(
			`https://hacker-news.firebaseio.com/v0/item/${
				newStories[index + dataRange]
			}.json`
		);

		const data = await response.json();

		if (data?.url) {
			dataArray.push(data);
		}
	}

	return dataArray;
};

export { getData };
