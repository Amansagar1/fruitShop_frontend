import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MAA ANANTA FRUITS - Fresh Fruit Delivery & Booking",
  description: "Book fresh fruit baskets online. Seasonal fruits, organic options, and custom baskets delivered to your doorstep.",
  keywords: "fruits, fruit basket, delivery, organic, fresh fruits",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}