import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  title = "DJ Events | Find the hottest parties",
  keywords = "music, dj, edm, events",
  description = "Find the latest DJ and other musical events",
  children,
}) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      {/* {router.pathname === "/" && <Showcase />} */}

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
