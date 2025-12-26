'use client';

import { useMemo, useState } from 'react';
import TodoTabs from '../todos/todo-tabs';
import TodoList from '../todos/todo-list';
import { Category, TabState, TodoItem } from '@/type';
import TodoInput from '../todos/todo-input';

const INITIAL_TODOS: TodoItem[] = [
	{
		id: 1,
		text: '아침 스트레칭',
		category: 'ROUTINE',
		isCompleted: false,
		time: '10m',
	},
	{
		id: 2,
		text: '영양제 먹기',
		category: 'ROUTINE',
		isCompleted: true,
		time: '1m',
	},
	{
		id: 3,
		text: '리액트 컴포넌트 설계',
		category: 'TASK',
		isCompleted: false,
		time: '1h 40m',
	},
	{
		id: 4,
		text: '블로그 글 작성',
		category: 'TASK',
		isCompleted: false,
		time: '45m',
	},
];

export default function RightLayout() {
	const [modes, setModes] = useState(true);
	const [todos, setTodos] = useState<TodoItem[]>(INITIAL_TODOS);
	const [activeTab, setActiveTab] = useState<TabState>('ROUTINE');
	const [inputText, setInputText] = useState('');

	const formattedDate = useMemo(() => {
		const today = new Date();
		return `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(
			2,
			'0'
		)}.${String(today.getDate()).padStart(2, '0')}`;
	}, []);

	const toggleModes = () => {
		setModes;
	};

	const toggleTodo = (id: number) => {
		setTodos((prev) =>
			prev.map((todo) =>
				todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
			)
		);
	};

	const handleAddTodo = () => {
		if (!inputText.trim()) return;

		const category: Category = activeTab === 'ROUTINE' ? 'ROUTINE' : 'TASK';
		const newTodo: TodoItem = {
			id: Date.now(),
			text: inputText,
			category,
			isCompleted: false,
			time: '0m',
		};

		setTodos([...todos, newTodo]);
		setInputText('');
	};

	const filteredTodos = todos.filter((todo) => {
		if (activeTab === 'DONE') return todo.isCompleted;
		if (activeTab === 'ROUTINE')
			return todo.category === 'ROUTINE' && !todo.isCompleted;
		if (activeTab === 'TASK')
			return todo.category === 'TASK' && !todo.isCompleted;
		return false;
	});

	return (
		<div className='flex h-full w-full flex-col bg-white p-8'>
			<header>
				<h2 className='mb-6 text-3xl font-light tracking-wide text-gray-800'>
					{formattedDate}
				</h2>
			</header>
			<TodoInput
				value={inputText}
				onChange={setInputText}
				onAdd={handleAddTodo}
				disabled={activeTab === 'DONE'}
				placeholder={
					activeTab === 'DONE'
						? '완료된 항목만 보입니다'
						: `${activeTab === 'ROUTINE' ? '루틴' : 'Task'} 추가하기...`
				}
			/>

			<TodoTabs activeTab={activeTab} onTabChange={setActiveTab} />

			<TodoList
				todos={filteredTodos}
				onToggle={toggleTodo}
				emptyMessage={
					activeTab === 'DONE'
						? '완료된 항목이 없습니다.'
						: '등록된 할 일이 없습니다.'
				}
			/>
		</div>
	);
}
