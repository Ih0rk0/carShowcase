import { Hero } from "@/components";
import { Searchbar } from "@/components/Searchbar";
import { fetchCars } from "./utils";
import { CarCard } from "@/components/CarCard";
export default async function Home() {
  // const allCars= await fetchCars()
  const arr = [1, 2, 3]

  return (

    <main className="overflow-hidden ">
      <Hero />
      <Searchbar />


    </main>

  );
}
