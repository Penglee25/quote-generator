import axios from "axios";
import { useEffect, useRef, useState } from "react";

export function useFetch(url: string) {
	const [data, setData] = useState<TApiResponse>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<any>(null);

	const shouldFetch = useRef(true);

	useEffect(() => {
		if (shouldFetch.current) {
			shouldFetch.current = false;
			setLoading(true);
			axios
				.get(url)
				.then((resp) => {
					if (url.includes("author")) {
						setData(resp.data.results);
					} else {
						setData(resp.data);
					}
				})
				.catch((error) => {
					setError(error);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, []);
}

export interface IData {
	author: string;
	authorSlug?: string;
	content: string;
	dateAdded?: string;
	dateModified?: string;
	length?: number;
	tags?: string[];
	_id?: string;
  }
  
  export interface IDataAuthor {
	count: number;
	content?: string;
	lastItemIndex: null;
	page: number;
	results: IData[];
	totalCount: number;
	totalPages: number;
  }

export type TApiResponse = IData | IData[] | IDataAuthor | null;
