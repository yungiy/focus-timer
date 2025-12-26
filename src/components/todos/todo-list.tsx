import { TodoItem } from '@/type';
import { twMerge } from 'tailwind-merge';

interface Props {
	todos: TodoItem[];
	onToggle: (id: number) => void;
	emptyMessage: string;
}
export default function TodoList({
	todos = [],
	onToggle,
	emptyMessage,
}: Props) {
	if (!todos || todos.length === 0) {
		return (
			<div className='mt-10 text-center text-gray-400'>{emptyMessage}</div>
		);
	}

	return (
		<ul className='flex-1 overflow-y-auto pr-2 custom-scrollbar'>
			{todos.map((todo) => (
				<li
					key={todo.id}
					className='group mb-3 flex items-center justify-between border-b border-gray-100 py-3 last:border-none'
				>
					<div className='flex items-center gap-4'>
						<button
							onClick={() => onToggle(todo.id)}
							className={twMerge(
								'flex h-6 w-6 items-center justify-center rounded border transition-colors',
								todo.isCompleted
									? 'border-black bg-black text-white'
									: 'border-gray-400 hover:border-black'
							)}
						>
							{todo.isCompleted && (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-4 w-4'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							)}
						</button>
						<span
							className={twMerge(
								'text-lg cursor-pointer select-none',
								todo.isCompleted && 'text-gray-400 line-through'
							)}
							onClick={() => onToggle(todo.id)}
						>
							{todo.text}
						</span>
					</div>
					<span className='text-sm font-medium text-gray-500'>{todo.time}</span>
				</li>
			))}
		</ul>
	);
}
