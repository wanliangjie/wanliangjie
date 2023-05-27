// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comments, Book } = initSchema(schema);

export {
  Comments,
  Book
};