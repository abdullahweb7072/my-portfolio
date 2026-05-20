import Footer from "@/Components/Footer";
import "./globals.css";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Loader from "@/Components/Loader";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: "Abdullah Portfolio",
  description: "My Next.js Portfolio Website",

  icons: {
    icon: "/myicon.png",
  },

  openGraph: {
    title: "Abdullah Portfolio",
    description: "Frontend Developer Portfolio",
    url: "https://yourdomain.com",
    siteName: "Abdullah Portfolio",
    images: [
      {
        url: "https://yourdomain.com/myimg.jpeg",
        width: 1200,
        height: 630,
        alt: "My Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} font-sans`}>
        

        <Navbar />
        
        <main className="pt-24">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}