import ProductCard from "./ProductCard";
import {auth, useUser} from "@clerk/nextjs";
import {useEffect, useState} from "react";
import useWishlist from "@/lib/hooks/useWishlist";
import {getUser} from "@/lib/actions/actions";

const ProductList = async ({ products } : {products: ProductType[]}) => {

  const wishlist = await useWishlist();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading2-bold">Products</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} liked={wishlist?.includes(product._id)}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
