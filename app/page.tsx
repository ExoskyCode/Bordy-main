import { BoardCard } from '~/src/components/BoardCard/BoardCard';
import { prisma } from '~/src/db/prisma';

export default async function Home() {
	const boards = await prisma.board.findMany();
	return (
		<div>
			<ul className='flex flex-col gap-4'>
				{boards.map((board) => (
					<BoardCard key={board.id} board={board} />
				))}
			</ul>
		</div>
	);
}
