import React from 'react';
import Link from 'next/link';

export const Header = () => {
	return (
		<div className='p-4 border-b-2 border-b-gray-700'>
			<Link className='text-2xl font-bold' href="/">Bordy</Link>
		</div>
	);
};
