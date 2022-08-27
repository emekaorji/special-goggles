export type PostData = {
	url: string;
	title: string;
	by: string;
	time: string;
};

export interface Results {
	results: Array<PostData>;
}
