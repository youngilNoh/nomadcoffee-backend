import { gql } from 'apollo-server-core';

export const typeDefs = gql`
	type User {
		id: String!
		username: String!
		email: String!
		name: String!
		location: String!
		avatarURL: String!
		githubUsername: String!
	}
`;
