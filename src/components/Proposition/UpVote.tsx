'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { IoIosArrowUp } from 'react-icons/io';

type UpVoteProps = {
	voteCount: number;
	propositionId: number;
};

const onError = () => toast.error('You can only vote once');

export const UpVote = ({ voteCount, propositionId }: UpVoteProps) => {
	const router = useRouter();

	const handleClick = () => {
		fetch(`/api/propositions/${propositionId}/votes`, {
			method: 'POST',
		})
			.then((res) => {
				if (res.status === 201) {
					router.refresh();
					return;
				}
			})
			.catch(() => {
				onError();
			});
	};

	return (
		<button
			onClick={handleClick}
			className='flex flex-col items-center px-8 py-2 bg-green-900 bg-opacity-50 border-2 border-green-600 rounded-md hover:bg-opacity-75'>
			<IoIosArrowUp fontSize={24} />
			<span className='text-xl font-bold'>{voteCount}</span>
		</button>
	);
};
