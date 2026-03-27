import { Hero } from "./components/Hero";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { StarterKits } from "./components/StarterKits";
import { Products } from "./components/Products";
import { Testimonials } from "./components/Testimonials";
import { Benefits } from "./components/Benefits";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow w-full bg-white dark:bg-zinc-50">
      <Hero />
      <StarterKits />
      <WhyChooseUs />
      <Products />
      <Testimonials />
      <Benefits />
      <Contact />
    </div>
  );
}
