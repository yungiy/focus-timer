import { twMerge } from 'tailwind-merge';

type Props = React.ComponentPropsWithoutRef<'button'>;

export default function Button(props: Props) {
	const { className, children, ...rest } = props;
	return (
		<button
			className={twMerge(
				'whitespace-nowrap rounded-lg border border-black bg-white px-6 font-medium text-black transition hover:bg-black hover:text-white disabled:opacity-50',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
}
