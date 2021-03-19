//import { gql } from 'apollo-server';

// const users = [
//     {_id:'1', name:'gustavo', email:'guguedes@gmail.com', active: true},
//     {_id:'2', name:'guilherme', email:'guilherme@gmail.com', active: true}
// ];

import startServer from './startServer';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

startServer({typeDefs, resolvers});