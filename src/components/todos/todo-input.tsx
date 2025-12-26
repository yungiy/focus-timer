import Button from '../common/button';
import Input from '../common/input';

interface Props {
	value: string;
	onChange: (value: string) => void;
	onAdd: () => void;
	disabled: boolean;
	placeholder: string;
}

export default function TodoInput({
	value,
	onChange,
	onAdd,
	disabled,
	placeholder,
}: Props) {
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
			onAdd();
		}
	};

	return (
		<div className='mb-8 flex gap-2'>
			<Input
				type='text'
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder={placeholder}
				disabled={disabled}
				className='w-full rounded-lg border border-gray-300 px-4 py-3 text-lg outline-none disabled:bg-gray-100'
			/>
			<input
				type='text'
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder='날짜를 추가하세요.'
				disabled={disabled}
				className='w-full rounded-lg border border-gray-300 px-4 py-3 text-lg outline-none disabled:bg-gray-100'
			/>
			<Button onClick={onAdd} disabled={disabled}>
				Enter
			</Button>
		</div>
	);
}
