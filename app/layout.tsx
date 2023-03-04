import './globals.css';
import { Header } from '../src/components/Header/Header';
import { Providers } from './providers';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className='text-white bg-gray-900'>
				<Header />
				<div className='p-4'>{children}</div>
				<Providers /> 
			</body>
		</html>
	);
}
