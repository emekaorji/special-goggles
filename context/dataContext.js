import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext({});
const useData = () => useContext(DataContext);

function DataProvider({ children }) {
	const [data, setData] = useState([]);

	const updateData = (dataArray) => {
		setData(dataArray);
	};

	return (
		<DataContext.Provider value={{ data, updateData }}>
			{children}
		</DataContext.Provider>
	);
}

export { useData, DataProvider };
