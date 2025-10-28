import { Bebas_Neue, Poppins, Playfair_Display_SC } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Toaster } from "react-hot-toast";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const playfair_Display_SC = Playfair_Display_SC({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair-display-sc",
});

export const metadata = {
  title: "Terminal System",
  description: "Welcome to the Adventure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair_Display_SC.variable} ${poppins.variable} antialiased bg-[rgba(21,27,48,1)] md:bg-[linear-gradient(113.33deg,#000000_3.35%,#151b30_100.43%)]`}
      >
        <Toaster position="top-right" />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
