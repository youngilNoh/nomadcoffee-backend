import { hash } from 'bcrypt';
import client from '../../client';
import { protectedResolver } from '../users.utils';

export default {
	Mutation: {
		editProfile: protectedResolver(async (_, { username, email, name, location, password, avatarURL, githubUsername }, { loggedInUser }) => {
			if (password) {
				password = await hash(password, 10);
			}
			const updatedUser = await client.user.update({
				where: {
					id: loggedInUser.id,
				},
				data: {
					username,
					email,
					name,
					location,
					password,
					avatarURL,
					githubUsername,
				},
			});
			return updatedUser.id ? { ok: true } : { ok: false, error: "Can't update profile" };
		}),
	},
};
