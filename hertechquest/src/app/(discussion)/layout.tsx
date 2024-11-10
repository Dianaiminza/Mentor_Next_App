import {Inter} from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", });
export default function DiscussionsLayout({
                                            children,
                                        }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
