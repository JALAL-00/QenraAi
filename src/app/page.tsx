import React from "react";
import { AuthCard } from "@/components/AuthCard";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 bg-black bg-grid-white/[0.05] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <AuthCard />
    </main>
  );
}