import { twMerge } from 'tailwind-merge';
import { Dispatch, SetStateAction } from 'react';
import { TabState } from '@/type';

interface Props {
	activeTab: TabState;
	onTabChange: Dispatch<SetStateAction<TabState>>;
}

const TABS: { key: TabState; label: string }[] = [
	{ key: 'ROUTINE', label: '루틴' },
	{ key: 'TASK', label: 'Task' },
	{ key: 'DONE', label: '완료' },
];

export default function TodoTabs({ activeTab, onTabChange }: Props) {
	return (
		<div className='mb-4 flex border-b border-gray-300 text-lg'>
			{TABS.map((tab) => (
				<button
					key={tab.key}
					onClick={() => onTabChange(tab.key)}
					className={twMerge(
						'flex-1 pb-3 text-center font-medium transition-colors',
						activeTab === tab.key
							? 'border-b-2 border-black text-black'
							: 'text-gray-400 hover:text-gray-600'
					)}
				>
					{tab.label}
				</button>
			))}
		</div>
	);
}
