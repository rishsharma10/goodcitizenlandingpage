import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Download } from "@/components/sections/Download";
import Head from "next/head";
import logo from "@/assest/logo.png";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Head>
        <link rel="icon" href={logo.src} />
      </Head>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Download />  
      <Footer />
    </main>
  );
}
