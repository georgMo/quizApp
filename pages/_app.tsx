

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import AppContext from '../AppContext'



export default function App({ Component, pageProps }: AppProps) {
  const [fetchedQuestions, setFetchedQuestions] = useState<[]>([]);

 




  return (<AppContext.Provider value={{ fetchedQuestions, setFetchedQuestions }}><Component {...pageProps} /></AppContext.Provider>)
}
