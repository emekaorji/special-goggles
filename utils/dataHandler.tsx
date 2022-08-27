import { data } from '../types/dataTypes';

const getData = async () => {
  const dataArray: Array<object> = [];

  for (let index = 1; index <= 20; index++) {
    // 124
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${index}.json`);
    
    const data: data = await response.json();

    if (data.url) {
      dataArray.push(data);
    }
  }

  return dataArray;
}

export { getData }