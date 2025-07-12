import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
<div className="flex flex-col items-center">
  <Hero/>
  <Skills/>
  <Footer/>
  
</div>
  );
}
