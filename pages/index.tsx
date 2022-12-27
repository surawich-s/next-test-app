import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Next13 test app</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main className="flex flex-cols justify-center items-center mx-auto">
                <h1 className="text-3xl text-bold">Hello World</h1>
            </main>
        </>
    );
}
