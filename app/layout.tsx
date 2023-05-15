import "@styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="main">
                    <div className="gradient" />
                </div>
                <div className="app">{children}</div>
            </body>
        </html>
    );
}
