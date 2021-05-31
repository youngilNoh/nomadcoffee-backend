import { gql } from 'apollo-server';

export default gql`
	type FollowUserResult {
		ok: String!
		error: String
	}
	type Mutation {
		followUser(username: String!): FollowUserResult!
	}
`;
