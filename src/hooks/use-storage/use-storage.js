import { useState, useEffect } from "react";

export const useStorage = (key, initialState) => {

	const stored = localStorage.getItem(key);

	const initial = stored ? JSON.parse(stored) : initialState;

	const [value, setValue] = useState(initial);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];

};