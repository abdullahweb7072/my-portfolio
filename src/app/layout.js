import Footer from "@/Components/Footer";
import "./globals.css";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "@/Components/Navbar";
import ThemeProvider from "@/Components/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          ${jetbrains.variable}
          font-sans
          bg-[var(--background)]
          text-[var(--foreground)]
          transition-colors
          duration-500
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >

          {/* Navbar now contains ThemeToggle */}
          <Navbar />

          <main className="pt-24">
            {children}
          </main>

          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}