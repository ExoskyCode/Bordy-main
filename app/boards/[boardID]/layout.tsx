import { PropsWithChildren } from "react";
import { notFound } from 'next/navigation';
import { prisma } from '~/src/db/prisma';

export default async function LayoutBoard({
  params,
  children
}: PropsWithChildren<{
  params: {boardID: string}
}>) {

  const boardID = Number(params.boardID);

	if (isNaN(boardID)) {
		return notFound;
	}

  return (
    <div>
      <h1>Board numéro {boardID}</h1>
      {children}
    </div>
  )

}