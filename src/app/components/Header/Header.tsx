import Link from 'next/link';
import React from 'react';

export const Header = () => {
	return (
		<nav className='min-w-full p-4 border-b-2 border-white border-solid'>
			<ul className='flex justify-between text-white'>
				<Link href='/'>Mon blog</Link>
				<Link href='/QA'>Questions/ Réponses</Link>
				<Link href='/Log'>Connexion</Link>
			</ul>
		</nav>
	);
};
