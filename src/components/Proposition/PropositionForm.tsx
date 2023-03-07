'use client';

import { FormEvent } from 'react';
import { Button } from '~/src/components/Board/CreateBoard/CreateBoardBtn';
import { Input } from '../Board/CreateBoard/CreateBoardInput';
import { useRouter } from 'next/navigation';

type PropositionFormProps = {
	boardId: number;
};

export const PropositionForm = (boardId: PropositionFormProps ) => {
	const router = useRouter();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const title = String(formData.get('title'));
		const boardIdRedirect: number = Number(boardId.boardId)
		
		fetch(`/api/boards/${boardIdRedirect}/propositions`, {
			method: 'POST',
			body: JSON.stringify({
				title,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				router.refresh();
			});
	};

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-2'>
			<h1 className='text-2xl'>Create a new proposition</h1>
			<Input label='Title' name='title' />
			<Button type='submit'>Create proposition</Button>
		</form>
	);
};
