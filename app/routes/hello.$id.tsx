import { LoaderFunction, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

interface Pokemon {
    name: string;
    sprites: {
        front_default: string;
    };
}

export const loader: LoaderFunction = async ({ params }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);

    if (!res.ok) {
        throw new Error("Failed to fetch pokemon");
    }

    const data = await res.json<Pokemon>();

    return json(data);
};

export default function PokemonPage() {
    const pokemon = useLoaderData<Pokemon>();

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img
                src={pokemon.sprites.front_default}
                alt={`Sprite of ${pokemon.name}`}
            />
        </div>
    );
}




// import { json, LoaderFunction } from "@remix-run/cloudflare";
// import { useLoaderData } from "@remix-run/react";


// export const loader: LoaderFunction = async ({ params }) => {
//     const id = params.id as string

//     return json({ id: id });
// };


// export default function Index() {

//     const data = useLoaderData<typeof loader>()
//     console.log(data)

//     return <>
//         <h1>ハローワールド</h1>
//         <p>I love Cloudflare</p>
//         <p>{data as string}</p>
//     </>

// }