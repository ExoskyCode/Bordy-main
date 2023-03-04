import { Board } from '@prisma/client';
import Link from 'next/link';

type BoardCardProps = {
  board: Board;
};

export const BoardCard = ({ board }: BoardCardProps) => {
  return (
    <Link
      href={`/boards/${board.id}`}
      className="block p-6 bg-gray-800 border-gray-700 rounded-lg shadow w-fit hover:bg-gray-700"
    >
      <h5 className="text-2xl font-bold tracking-tight text-white">{board.title}</h5>
    </Link>
  );
};