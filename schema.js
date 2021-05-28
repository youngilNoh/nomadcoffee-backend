import { loadFilesSync, mergeTypeDefs, mergeResolvers, makeExecutableSchema } from 'graphql-tools';
import path from 'path';

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(path.join(__dirname, './**/*.resolvers.js'));

const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

export default schema;
