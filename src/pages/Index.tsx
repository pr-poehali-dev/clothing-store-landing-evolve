import Hero from "@/components/Hero";
import About from "@/components/About";
import Collections from "@/components/Collections";
import Technologies from "@/components/Technologies";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Collections />
      <Technologies />
    </div>
  );
};

export default Index;
