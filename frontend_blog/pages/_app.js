import "../styles/globals.css";
import Header from "../components/Header";
import Aos from "../components/Aos";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/scrollToTopBtn";
import TopLoadingLine from "../components/TopLoadingLine";

export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <main>
      <TopLoadingLine/>
      <Aos>
        <Component {...pageProps}/>
      </Aos>
      <ScrollToTopBtn/>
    </main>
    <Footer/>
  </>
}
