import Hero from "@/components/Hero";
import About from "@/components/About";
import Collections from "@/components/Collections";
import Technologies from "@/components/Technologies";
import Contacts from "@/components/Contacts";
import Preorder from "@/components/Preorder";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Collections />
      <Technologies />
      <Preorder />
      <Contacts />
    </div>
  );
};

export default Index;
