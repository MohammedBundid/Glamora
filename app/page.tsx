import FeaturedSale from "./components/store/FeaturedSale";
import FeaturedSeason from "./components/store/FeaturedSeason";
import FeaturedDiscount from "./components/store/FeaturedDiscount";
import FeaturedDeals from "./components/store/FeaturedDeals";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <FeaturedSale />
      <FeaturedSeason />
      <FeaturedDiscount />
      <FeaturedDeals />
    </div>
  );
}
