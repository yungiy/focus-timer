import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '타이머 | 일정관리',
	description: '타이머와 일정관리를 할 수 있습니다.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='kr'>
			<body className={`${geistSans.variable} antialiased`}>{children}</body>
		</html>
	);
}
