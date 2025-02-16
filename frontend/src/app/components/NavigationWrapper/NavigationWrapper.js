"use client";

import { usePathname } from 'next/navigation';
import Navbar from "@/pages/Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function NavigationWrapper({ children }) {
  const pathname = usePathname();
  
  return (
    <>
      {pathname !== '/admin' && <Navbar />}
      {children}
      {pathname !== '/admin' && <Footer />}
    </>
  );
}