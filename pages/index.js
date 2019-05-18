// pages/index.js

import Layout from '../components/my_layout'

const indexPageContent = <p>Hello Next.js</p>

export default function Index() {
  return <Layout content={indexPageContent} />
}