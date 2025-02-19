import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/cores/navbar";
import Footer from "./components/cores/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "ZOOMODIFICATION Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
        </body>
    </html>
  );
}
