"use client"
import { Button } from "@mui/material";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface CartProduct{
    name:string;
    description:string;
    price:number;
    currency:string;
    image:any;
    price_id:string
}

export default function AddtoBag({image,currency,description,name,price,price_id}: CartProduct){
    const {addItem, handleCartClick,cartDetails} = useShoppingCart();
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id,
      };
    return(
        <Button 
        onClick={()=>{
            addItem(product) ,
            handleCartClick();
        }}
        >
            Add to Cart
        </Button>
    )
}