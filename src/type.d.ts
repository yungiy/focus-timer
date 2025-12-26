declare module '@tomickigrzegorz/react-circular-progress-bar' {
	const CircularProgressBar: any;
	export { CircularProgressBar };
}

export type Category = 'ROUTINE' | 'TASK';
export type TabState = 'ROUTINE' | 'TASK' | 'DONE';

export interface TodoItem {
	id: number;
	text: string;
	category: Category;
	isCompleted: boolean;
	time: string;
}
