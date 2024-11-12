import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {auth, signOut, signIn} from "@/auth";

const Navbar = async () => {
    const session = await auth();

    // @ts-ignore
    return (
        <header className="px-5 py-3 bg-white shadoow-sm font-work-sans">
            <nav className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/yclogo.png" alt="logo" width={144} height={30} />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>
                            <form action={async () => {
                                "use server";
                                await signOut( { redirectTo: '/'} );
                            }}>
                                <button type="submit">Log out</button>
                            </form>
                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server";

                            await signIn('github')}}
                        >
                            <button type="submit">Log In</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}
export default Navbar
