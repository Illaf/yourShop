"use client"
import Link from "next/link";
import { fullProduct } from "../../interface";
import { client } from "../../lib/sanity";
import Image from "next/image";
import Gallery from "@/app/components/Gallery";
import { Button, Rating, Typography } from "@mui/material";
import { useState } from "react";
import AddtoCart from "@/app/components/AddtoCart";
import CheckOut from "../../components/CheckOut";
async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
      images,
      price,
      name,
      "slug": slug.current,
      "category": category->name,
description
  }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct= await getData(params.slug);
 //console.log(params.category);
 //const [value, setValue] = useState<number | null>(2);
//  async function hendleCheckoutClick(event:any){
//   event.preventDefault();
//   try{
//     const result= await redirectToCheckout();
//     if(result?.error){
//       console.log("result")
//     }
   

//   } catch(error){
// console.log(error);
//   }
// }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
        <Gallery images={data.images} />

<div className="md:py-8">
  <div className="mb-2 md:mb-3">
    <span className="mb-0.5 inline-block text-gray-500">
      {data.category}
    </span>
    <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
      {data.name}
    </h2>
  </div>

  <div className="mb-6 flex items-center gap-3 md:mb-10">
    <Button className="rounded-full gap-x-2">
      <span className="text-sm">4.2</span>
      {/* <Star className="h-5 w-5" /> */}
    </Button>

    <span className="text-sm text-gray-500 transition duration-100">
      56 Ratings
    </span>
  </div>

  <div className="mb-4">
    <div className="flex items-end gap-2">
      <span className="text-xl font-bold text-gray-800 md:text-2xl">
        ${data.price}
      </span>
      <span className="mb-0.5 text-red-500 line-through">
        ${data.price + 30}
      </span>
    </div>

    <span className="text-sm text-gray-500">
      Incl. GST plus shipping
    </span>
  </div>

  <div className="mb-6 flex items-center gap-2 text-gray-500">
    {/* <Truck className="w-6 h-6" /> */}
    <span className="text-sm">2-4 Day Shipping</span>
  </div>

  <div className="flex gap-2.5">
  <AddtoCart currency="INR" description={data.description} image={data.images[0]} name={data.name} price={data.price} key={data._id} price_id={data.price_id}/>
  <CheckOut
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
  </div>

  <p className="mt-12 text-base text-gray-500 tracking-wide">
    {data.description}
  </p>
</div>
      </div>
      </div>
    </div>
  );
}