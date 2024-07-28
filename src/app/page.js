import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React from "react";
import Link from "next/link";

<html data-theme="lofi"></html>;

export default function Home() {
  return (
    <div className="mx-auto bg-black">
      <header>
        <title>Event Makers</title>
        <meta name="description" content="CariFilm Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </header>

      {/* <Header /> */}

      <main className="flex items-center justify-center bg-black h-screen text-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-2 w-full lg:w-auto">
              <img src="/images/img-dashboard.png" alt="Event 2" className="rounded-lg w-full max-h-screen object-contain" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-16">
            <h1 className="text-2xl font-bold text-grey mb-4">Synergia</h1>
            <h1 className="text-6xl font-bold mb-6">CariFilm</h1>
            <h3 className="text-xl mb-8">
              Kami Merekomendasikan Film Apa Saja <br /> Yang Penting Anda Suka!
            </h3>
            <Link href="/authen/register">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg">Masuk</button>
            </Link>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
