import Wedding from "./sections/Wedding";
import FineJewellery from "./sections/FineJewellery";
import Gifts from "./sections/Gifts";
import DiamondWorld from "./sections/DiamondWorld";
import SpecialEditions from "./sections/SpecialEditions";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Wedding />
      <FineJewellery />
      <Gifts />
      <DiamondWorld />
      <SpecialEditions />
      <Hero />
    </main>
  );
}
