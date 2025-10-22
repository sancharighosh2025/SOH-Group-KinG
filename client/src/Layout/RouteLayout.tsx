// src/layout/RootLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar.tsx";
import Footer from "../component/Footer.tsx";


export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <Navbar />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}