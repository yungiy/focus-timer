import { ForwardedRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
	type: 'text' | 'password' | 'email' | 'search';
};

const Input = forwardRef(function Input(
	props: Props,
	ref: ForwardedRef<HTMLInputElement>
) {
	const { className, ...rest } = props;
	return (
		<input
			ref={ref}
			className={twMerge(
				'w-full rounded-lg border border-gray-300 px-4 py-3 text-lg outline-none disabled:bg-gray-100',
				className
			)}
			{...rest}
		/>
	);
});

Input.displayName = 'Input';
export default Input;
