import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";

const poppins = Poppins({
  weight:['400','500','700'],
  subsets: ["latin"],
});


export const metadata = {
  title: "My first app",
  description: "Travel guide to Chitwan Nepal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-black h-screen w-full text-white`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
