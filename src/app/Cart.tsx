"use client"
import { ReactNode } from "react";
import {CartProvider} from "use-shopping-cart";

export default function Cart({children}:{children:ReactNode}){
return (
    <CartProvider mode= 'payment' cartMode="client-only" stripe={process.env.STRIPE_KEY as string}
    successUrl="http://localhost/3000/success"
    cancelUrl="http://localhost/3000/failed"
    currency="INR"
    billingAddressCollection={false}
    shouldPersist={true}
    language="en-US"
>
        {children}
    </CartProvider>
)
}