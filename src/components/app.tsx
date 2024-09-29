"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Impact } from "@/components/impact";
import { Philosophy } from "@/components/philosophy";
import { Footer } from "@/components/footer";

export function AppComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Impact />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}
