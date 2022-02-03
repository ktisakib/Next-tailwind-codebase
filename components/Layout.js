import Head from "next/head";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

const Layout = ({ children }) => {
  return (
    <div className=''>
      <Head>
        <title>Kate</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
