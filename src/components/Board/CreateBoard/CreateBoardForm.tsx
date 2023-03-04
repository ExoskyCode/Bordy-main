'use client';

import { FormEvent } from 'react';
import { Input } from './CreateBoardInput';
import { Button } from '~/src/components/Board/CreateBoard/CreateBoardBtn';

export const CreateBoardForm = () => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const title = String(formData.get('title'));

    fetch(`/api/boards`, {
      method: 'POST',
      body: JSON.stringify({
        title,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
	};

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-2'>
			<h1 className='text-2xl'>Create a new board</h1>
			<Input label='Title' name='title' />
			<Button type='submit'>Create board</Button>
		</form>
	);
};
