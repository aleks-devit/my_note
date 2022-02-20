import '../styles/nulable.css'
import type {AppProps} from 'next/app'
import {ApolloProvider} from '@apollo/client'
import {useApollo} from '../lib/apolloClient'
import {Provider} from '../context'

function MyApp({Component, pageProps}: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp
