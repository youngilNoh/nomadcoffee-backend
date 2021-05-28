import { verify } from 'jsonwebtoken';
import client from '../client';

export const getUser = async (token) => {
	try {
		if (!token) {
			return null;
		}
		const { id } = verify(token, process.env.SECRET_KEY);
		const user = await client.user.findUnique({ where: { id } });
		return user ? user : null;
	} catch {
		return null;
	}
};

export const protectedResolver = (ourResolver) => (root, args, context, info) => {
	if (!context.loggedInUser) {
		return {
			ok: false,
			error: 'ERROR: Must be logged in.',
		};
	}
	return ourResolver(root, args, context, info);
};
