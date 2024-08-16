import { Inter } from "next/font/google";
import "./globals.css";

import 'react-vertical-timeline-component/style.min.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio: Group-7 ",
  description: "About work and other details of Foram Patel and Vidhi Chauhan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
