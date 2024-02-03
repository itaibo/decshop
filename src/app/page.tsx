import { Logo } from "@/components/Logo";
import { Search } from "@/components/Search";
import { SmallProductTile } from "@/components/SmallProductTile";
import * as Database from "@/infrastructure/database";
import { Suspense } from "react";

export default function Home() {
  const topProducts = Database.getTopProducts(3);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="md:mt-[50px] mt-[-150px] m5-900 w-[90%] max-w-[450px] flex items-center justify-stretch flex-col gap-7">
        <Logo className="flex-grow" />
        <Suspense>
          <Search className="flex-grow" />
        </Suspense>

        <div className="w-full text-center mt-5 mb-20 md:block hidden">
          <div className="text-sm text-slate-600">Los mejores productos:</div>
          <div className="mt-2 flex md:flex-row flex-col md:gap-2 gap-5 pl-5 pr-5 items-center">
            {topProducts.map((product, key) => (
              <SmallProductTile key={key} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
