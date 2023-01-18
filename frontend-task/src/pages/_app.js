import '@/styles/globals.css'
import 'antd/dist/antd.css';
import { AppProvider } from '../../context/appContext'

export default function App({ Component, pageProps }) {
  return( 
   <AppProvider>
      <Component {...pageProps} />
   </AppProvider>
  )
}
