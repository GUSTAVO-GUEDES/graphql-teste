import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

const typesArray = fileLoader(path.join(__dirname, 'modules', '**', '*.gql'));

export default mergeTypes(typesArray);