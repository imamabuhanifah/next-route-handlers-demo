import { cookies, headers } from "../../../../node_modules/next/headers";
import { NextRequest } from "../../../../node_modules/next/server";

export async function GET(requset: NextRequest) {
    const requsetHeaders = new Headers(requset.headers);
    const headerList = headers();

    // #1 methode to get cookies using next/cookies
    cookies().set('valuePerPage', '20');

    // #2 methode to get cookies using next/headers
    const theme = requset.cookies.get('theme');

    console.log(requsetHeaders.get('Authorization'));
    console.log(headerList.get('Authorization'));

    console.log(theme)
    console.log(cookies().get('valuePerPage'));
    return new Response("<h1>Profile API Data</h1>", {
        headers: {
            'Content-Type': 'text/html',
            'set-cookie': 'theme=dark'
        }
    });
}