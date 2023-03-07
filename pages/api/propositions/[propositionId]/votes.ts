import { Vote } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { prisma } from '~/src/db/prisma';

type Data = {
	vote: Vote;
};

const QueryScheme = z.object({
	propositionId: z.string(),
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	try {
		if (req.method !== 'POST') {
			res.status(405).end();
			return;
		}

		const query = QueryScheme.parse(req.body);

		const vote = await prisma.vote.create({
			data: {
				ip: String(Math.random()),
				propositionId: Number(query.propositionId),
			},
		});
		res.status(201).json({ vote });
	} catch (err) {
		console.log({ err });
		console.log(typeof req.body);
	}
}
