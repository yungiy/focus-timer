'use client';

import { CircularProgressBar } from '@tomickigrzegorz/react-circular-progress-bar';

export default function LeftLayout() {
	return (
		<div className='w-full h-screen flex flex-col items-center justify-center px-5'>
			<div className='relative w-full'>
				<CircularProgressBar
					animationSmooth='1s ease-out'
					colorCircle='#d1d5dc'
					colorSlice='#000'
					percent={100}
					fill='#FFFF'
					stroke={0.2}
					round={true}
					number={false}
					size={undefined}
				/>
				<div className='absolute inset-0 flex flex-col items-center justify-center'>
					<span className='text-8xl font-thin tracking-wide'>06:15</span>
				</div>
			</div>

			<div className='flex items-center justify-center gap-4'>
				<button className='whitespace-nowrap rounded-lg border text-3xl font-medium border-black bg-white px-28 py-6 text-black transition hover:bg-black hover:text-white disabled:opacity-50'>
					Start
				</button>
				<button className='whitespace-nowrap rounded-lg border text-2xl font-medium border-black bg-white px-3 py-3 text-black transition hover:bg-black hover:text-white disabled:opacity-50'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='w-16 h-16'
					>
						<path
							d='M9.5 15L3.5 9m0 0l6-6M3.5 9h11a6 6 0 010 12h-3'
							transform='translate(12 12) scale(0.7) translate(-12 -12)'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
