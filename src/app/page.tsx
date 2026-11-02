import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Voices } from "@/components/home/voices";
import { Work } from "@/components/home/work";

export default function Home() {
  return (
    <>
      <Hero />
      <Voices />
      <Work />
      <Services />
    </>
  );
}
