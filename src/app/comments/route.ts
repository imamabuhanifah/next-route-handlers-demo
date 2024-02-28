import { NextRequest } from "../../../node_modules/next/server";
import { commenst } from "./data";

export async function GET(requset: NextRequest) {
    const searchParams = new URLSearchParams(requset.nextUrl.searchParams);
    const query = searchParams.get('query');
    const filteredComments = query
        ? commenst.filter((comment) => comment.text.includes(query))
        : commenst;
    const response = new Response(JSON.stringify(filteredComments), {
        status: 200, headers: { 'Content-Type': 'application/json' }
    });
    return response;
}

export async function POST(requset: Request) {
    const comment = await requset.json();
    const newComment = {
        id: commenst.length + 1,
        text: comment.text
    }
    commenst.push(newComment);
    return new Response(JSON.stringify(newComment), {
        status: 200, headers: { 'Content-Type': 'application/json' }
    });
}