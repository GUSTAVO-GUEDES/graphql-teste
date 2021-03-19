import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export default function startServer(typeDefs, resolvers){   
    const uri = process.env.ATLAS_URI;

    mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true})
    .then(console.log(`DB connected`))
    .catch(err => console.error(`Conection error with the DB: ${err}`))

    const server = new ApolloServer({typeDefs, resolvers});
    server.listen().then(({url}) => console.log(`Server started at ${url}`));
}