import "./globals.css";
import { Roboto_Mono } from "next/font/google";
// import { Space_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });
// const spaceMono = Space_Mono({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={robotoMono.className}>
                <div className="grid min-h-screen place-content-center bg-blue-950 px-4">
                    <div className="sm:w-[500px] md:w-[600px] lg:w-[700px]">
                        <Navbar />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
