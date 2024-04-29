"use client";

import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { CartProduct } from "../components/AddtoCart";
import { Button } from "@mui/material";

export default function CheckOut({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: CartProduct) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button
    //   variant="outline"
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Checkout Now
    </Button>
  );
}