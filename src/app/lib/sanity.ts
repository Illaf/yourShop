import {createClient} from "next-sanity"
import imageUrlBuilder  from "@sanity/image-url"


export const client= createClient({
    projectId:'8sy1i9i7',
    dataset:'production',
    apiVersion:'2024-03-25',
    useCdn:true,
    token: process.env.SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export function urlFor(source:any) {
    return builder.image(source);
}
