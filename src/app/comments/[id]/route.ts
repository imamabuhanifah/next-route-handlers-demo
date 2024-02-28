import { redirect } from "../../../../node_modules/next/navigation";
import { commenst } from "../data";

export async function GET(
    _request: Request, { params }: { params: { id: string } }
) {
    if (parseInt(params.id) > commenst.length) {
        redirect("/comments");
    }
    const comment = commenst.find((comment) => comment.id === parseInt(params.id));
    return new Response(JSON.stringify(comment), {
        status: 200, headers: { 'Content-Type': 'application/json' }
    });
}

export async function PATCH(
    requset: Request,
    { params }: { params: { id: string } }
) {
    const body = await requset.json();
    const { text } = body;
    const index = commenst.findIndex(
        (comment) => comment.id === parseInt(params.id)
    );
    commenst[index].text = text;
    return new Response(JSON.stringify(commenst[index]), {
        status: 200, headers: { 'Content-Type': 'application/json' }
    });
}

export async function DELETE(
    _requset: Request,
    { params }: { params: { id: string } }
) {
    const index = commenst.findIndex(
        (comment) => comment.id === parseInt(params.id)
    );
    commenst.splice(index, 1);
    return new Response(JSON.stringify(commenst[index]), {
        status: 200, headers: { 'Content-Type': 'application/json' }
    });
}