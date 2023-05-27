import Image from 'next/image';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import {BookcardsCollection,NavBar} from '../ui-components';



export default function home() {
  return (
     <Authenticator>
      < NavBar width={'100%'}/>
      <BookcardsCollection width={'100%'} height={'100%'}/>
     </Authenticator>
  )
}
