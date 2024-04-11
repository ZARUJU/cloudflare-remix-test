import { json, LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";


export const loader: LoaderFunction = async ({ params }) => {
    const id = params.id as string

    return json({ id: id });
};


export default function Index() {

    const data = useLoaderData<typeof loader>()
    console.log(data)

    return <>
        <h1>ハローワールド</h1>
        <p>I love Cloudflare</p>
        <p>{data as string}</p>
    </>

}