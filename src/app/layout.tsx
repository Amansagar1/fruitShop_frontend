import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MAA ANANTA FRUITS - Fresh Fruit Delivery & Booking",
  description:
    "Book fresh fruit baskets online. Seasonal fruits, organic options, and custom baskets delivered to your doorstep.",
  keywords: "fruits, fruit basket, delivery, organic, fresh fruits",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {/* Add padding so content doesn’t overlap the fixed navbar */}
        <main className="min-h-screen ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
