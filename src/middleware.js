// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export const middleware = async (request) => {
// // const token = cookies(request).get("__Secure-next-auth.session-token");
//   const token = cookies(request).get("next-auth.session-token");
//   const pathname = request.nextUrl.pathname
//   if(pathname.includes('api')) {
//       return NextResponse.next();
//   }

//   if (!token) {
//     return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
//   }
//   return NextResponse.next();
// };

// export const config = {
//   // matcher: ["/my-bookings/:path*", "/services/:path*",],
//   matcher: ["/hiring","/profile", "/myinfo"],
// };


import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export function middleware(request) {
  const cookieStore = cookies();

  const token =
    cookieStore.get("__Secure-next-auth.session-token")?.value ||
    cookieStore.get("next-auth.session-token")?.value;

  const pathname = request.nextUrl.pathname;

  if (pathname.includes('api')) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/hiring", "/profile", "/myinfo"],
};
