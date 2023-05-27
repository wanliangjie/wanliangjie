import '@/styles/globals.css'
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../ui-components";
import { API, graphqlOperation } from 'aws-amplify';

Amplify.configure(awsconfig);

export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={studioTheme}>
  <Component {...pageProps} />
  </ThemeProvider>
}

