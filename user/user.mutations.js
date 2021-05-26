import bcrypt from 'bcrypt';
import client from '../client';

export default {
	Mutation: {
		createAccount: async (_, { username, email, name, location, avatarURL, githubUsername, password }) => {
			try {
				const checkUser = await client.user.findFirst({
					where: {
						OR: [{ username }, { email }],
					},
				});
				const uglyPasswrod = await bcrypt.hash(password, 10);

				if (!checkUser) {
					await client.user.create({
						data: {
							username,
							email,
							name,
							location,
							avatarURL,
							githubUsername,
							password: uglyPasswrod,
						},
					});
					return {
						ok: true,
					};
				} else {
					return {
						ok: false,
						error: 'username or email is already exist.',
					};
				}
			} catch (error) {
				return {
					ok: false,
					error,
				};
			}
		},
	},
};
