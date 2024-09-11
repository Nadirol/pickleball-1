import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Barlow_Condensed } from 'next/font/google'

const barlow = Barlow_Condensed({ weight: ['300', '400', '500', '600', '700', '800'], subsets: ['vietnamese', 'latin']})

export default function Home() {
  return (
    <div className={`${barlow.className}`}>
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
