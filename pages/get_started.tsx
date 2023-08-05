import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Layout from '../components/layout';

export default function GetStarted() {
  return (
    <>
      <Navbar />
      <Layout size={'80rem'}>
      <Contact />

      </Layout>

      <Footer />
    </>
  )
}
