import '../style/index.css'
import {ProvideAuth} from '../utils/auth'
import Layout from '../component/Layout'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if(router.pathname === '/page/[slug]') {
    return (
      <div>
         <Component {...pageProps} />
      </div>
    )
  }
  return (
    <ProvideAuth>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProvideAuth>
  )
}

export default MyApp
