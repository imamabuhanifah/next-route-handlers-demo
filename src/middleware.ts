import { NextResponse, type NextRequest } from "../node_modules/next/server";

export function middleware(request: NextRequest) {
    /*
    * to set cookies
    */
    const response = NextResponse.next();

    const themePreference = request.cookies.get('theme');
    if (!themePreference) {
        response.cookies.set('theme', 'dark');
    }

    response.headers.set('custome-header', 'custom-value');
    return response;

    /*
    * to overwrite url to hello page
    */
    // if (request.nextUrl.pathname === '/profile') {
    //     return NextResponse.rewrite(new URL('/hello', request.url));
    // }

    /*
    * to redirect to home
    */
    // return NextResponse.redirect(new URL('/', request.url));
}

/*
* function config for middleware
*/
// export const config = {
//     matcher: '/profile',
// }