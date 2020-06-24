import React from 'react'
import Layout from '../components/layout'
import '../page-assets/global/styles/_page-layout.sass';

const style404 = {
  margin: '50px 0',
}

const NotFoundPage = () => (
  <Layout>
    <section style={style404} className="site__page-width">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </Layout>
)

export default NotFoundPage
