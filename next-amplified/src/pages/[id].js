import { serializeModel } from "@aws-amplify/datastore/ssr";
import { DataStore, Amplify, withSSRContext } from "aws-amplify";

import { HeroLayout1 , Comment, CommentCollection} from "../ui-components";
import { Book } from "../models";
import { Comments } from "../models";

export async function getStaticPaths({ req }) {
  const SSR = withSSRContext({ req });
  const books = await SSR.DataStore.query(Book);
  return {
    paths: books.map(book => ({ params: { id: book.id }})),
    fallback: true
  };
}

export async function getStaticProps(context) {
  const SSR = withSSRContext({ context });
  const book = await SSR.DataStore.query(Book, context.params.id);
  const comments=await SSR.DataStore.query(Comments, c => c.bookID.eq(book.id));

  return {
    props: { book: serializeModel(book) , comments: serializeModel(comments)},
  }
}

export default function BookDetail({ book ,comments}) {
  return <HeroLayout1 width={'100%'} book={book} 
  heroMessage={
    <CommentCollection comments={comments}/>}/>;
}
