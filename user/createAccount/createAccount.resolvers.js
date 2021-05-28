import bcrypt from 'bcrypt';
import client from '../../client';

export default {
	Mutation: {
		createAccount: async (_, { username, email, name, location, avatarURL, githubUsername, password }) => {
			try {
				const checkUser = await client.user.findFirst({
					where: {
						OR: [{ username }, { email }],
					},
				});

				if (checkUser) {
					throw new Error('username or email is already exist.');
				}

				const HashedPasswrod = await bcrypt.hash(password, 10);
				await client.user.create({
					data: {
						username,
						email,
						name,
						location,
						avatarURL,
						githubUsername,
						password: HashedPasswrod,
					},
				});
				return {
					ok: true,
				};
			} catch (error) {
				return {
					ok: false,
					error,
				};
			}
		},
	},
};
