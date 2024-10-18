"use cilent";
import About from "@components/About";
import Contact from "@components/Contact";
import HeroSection from "@components/HeroSection";
import Categories from "@components/Categories";
export default function Home() {
  return (
    <section>
      <HeroSection />
      <h1 className="text-center text-3xl font-semibold">
        Browse By Categories
      </h1>
      <Categories />
      <About />
      <Contact />
    </section>
  );
}
