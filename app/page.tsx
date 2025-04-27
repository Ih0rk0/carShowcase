import { Hero } from "@/components";
import { Searchbar } from "@/components/Searchbar";

export default async function Home() {
  // const allCars= await fetchCars()


  return (

    <main className="overflow-hidden ">
      <Hero />
      <Searchbar />


    </main>

  );
}
