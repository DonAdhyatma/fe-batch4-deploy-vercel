// "use client"

// import {BrowserRouter} from 'react-router-dom'
// import Nav from '@/components/navigation/nav'
// import RouterView from '@/components/navigation/routerView'
import NextNavG1 from "@/components/navigation/nextNavGroup1";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Group1Layout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <NextNavG1 />
      {children}

      {/* Menggunakan react router dom */}
      {/* <BrowserRouter>
          <Nav />
          <RouterView/>
        </BrowserRouter> */}
    </div>
  );
}
