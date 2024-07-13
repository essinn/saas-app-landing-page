import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <Slider />
      <Features />
      <Products />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
