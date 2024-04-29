import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

import Image from "next/image";
import {getProducts} from "@/lib/actions/actions";

const Home =  async () => {
  const products = await getProducts();
  return (
    <>
      <Image src="/banner-min.png" alt="banner" width={2000} height={1000} className="w-screen" />
      <Collections />
      <ProductList products={products}/>
    </>
  );
}

export default Home;

export const dynamic = "force-dynamic";

