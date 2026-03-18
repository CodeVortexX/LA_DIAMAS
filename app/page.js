import Wedding from "./sections/Wedding";
import FineJewellery from "./sections/FineJewellery";
import Gifts from "./sections/Gifts";
import DiamondWorld from "./sections/DiamondWorld";
import SpecialEditions from "./sections/SpecialEditions";

export default function Home() {
  return (
    <main>
      <Wedding />
      <FineJewellery />
      <Gifts />
      <DiamondWorld />
      <SpecialEditions />
    </main>
  );
}
