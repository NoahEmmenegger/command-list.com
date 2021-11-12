import '../style/index.css'
import {ProvideAuth} from '../utils/auth'
import Layout from '../component/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProvideAuth>
  )
}

export default MyApp
