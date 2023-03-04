import { notFound } from 'next/navigation';
import { prisma } from '~/src/db/prisma';

export default async function page({
	params,
}: {
	params: { boardID: string };
}) {
	const boardID = Number(params.boardID);

	if (isNaN(boardID)) {
		return notFound;
	}

	const board = await prisma.board.findUniqueOrThrow({
		where: {
			id: boardID,
		},
	})
	
	return <h2>{board.title}</h2>
}
