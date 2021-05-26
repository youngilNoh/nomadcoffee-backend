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
	type Return {
		ok: Boolean!
		error: String
	}
	type Query {
		testQuery(useranme: String): User
	}
	type Mutation {
		createAccount(username: String!, email: String!, name: String!, location: String!, avatarURL: String!, githubUsername: String!, password: String!): Return
	}
`;
