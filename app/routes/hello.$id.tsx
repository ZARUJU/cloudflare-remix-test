import { useParams } from "@remix-run/react";


// export const loader: LoaderFunction = async ({ params }) => {
//     const id = params.id as string

//     return json({ id: id });
// };

export default function Index() {
    const { id } = useParams()

    return <>
        <h1>ハローワールド</h1>
        <p>I love Cloudflare</p>
        <p>{id}</p>
        <p>これでうまくいくはず</p>
    </>

}