import LeftLayout from '@/components/layouts/left-layout';
import RightLayout from '@/components/layouts/right-layout';

export default function Home() {
	return (
		<main className='flex flex-1/2'>
			<LeftLayout />
			<RightLayout />
		</main>
	);
}
