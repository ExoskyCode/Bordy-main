import { prisma } from '~/src/db/prisma';

export default async function page({
	params,
}: {
	params: { boardID: string };
}) {
	const board = await prisma.board.findUniqueOrThrow();
	return <h1>Vous êtes au board ({params.boardID})</h1>;
}
