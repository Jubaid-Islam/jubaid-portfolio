import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/scroll/SmoothScroll";

export const metadata = {
  title: "Jubaid Islam — MERN-Stack Developer",
  description:
    "Portfolio of Jubaid Islam, a MERN-Stack developer building products that perform, scale, and solve real problems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-neutral-50 text-white" suppressHydrationWarning>
        <Navbar />

        <SmoothScroll />
        {children}

        <Footer />
      </body>
    </html>
  );
}