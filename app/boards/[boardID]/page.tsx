import { notFound } from 'next/navigation';
import { Proposition } from '~/src/components/Proposition/Proposition';
import { PropositionForm } from '~/src/components/Proposition/PropositionForm';
import { prisma } from '~/src/db/prisma';

export default async function BoardPage({
	params,
}: {
	params: { boardID: string };
}) {
	const boardId: number = Number(params.boardID);

	if (isNaN(boardId)) {
		return notFound();
	}

	const board = await prisma.board.findUniqueOrThrow({
		where: {
			id: boardId,
		},
	});

	const propositions = await prisma.proposition.findMany({
		where: {
			boardId: boardId,
		},
		orderBy: {
			vote: {
				_count: 'desc',
			},
		},
		select: {
			title: true,
			id: true,
			_count: {
				select: {
					vote: true,
				},
			},
		},
	});

	return (
		<div className='flex flex-col gap-8'>
			<h1 className='text-3xl font-bold'>{board.title}</h1>
			<PropositionForm boardId={board.id} />
			<ul className='flex flex-col gap-4'>
				{propositions.map((proposition) => (
					<Proposition
						key={proposition.id}
						voteCount={proposition._count.vote}
						{...proposition}
					/>
				))}
			</ul>
		</div>
	);
}
