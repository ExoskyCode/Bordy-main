import { BoardCard } from '~/src/components/Board/BoardCard';
import { Button } from '~/src/components/Board/CreateBoard/CreateBoardBtn';
import { prisma } from '~/src/db/prisma';

export default async function Home() {
	const boards = await prisma.board.findMany();
	return (
		<div className='flex flex-col gap-8'>
			<h1 className='text-4xl font-bold'>Boards List</h1>

			<Button as='a' href='/boards/new' className='self-start'>
				Create new Board
			</Button>

			<ul className='flex flex-col gap-4'>
				{boards.map((board) => (
					<BoardCard key={board.id} board={board} />
				))}
			</ul>
		</div>
	);
}
