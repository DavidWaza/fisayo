'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import VideoBg from "./components/VideoBg";
import WorkPortfolio from "./components/Work";
import Footer from "./components/Footer";
import EmailSection from "./components/EmailSection";
import Loader from "./components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 6000);
  }, []);
  return (
    <main className="bg-transparent">
      {isLoading ? (
        <>
          <VideoBg />
          <WorkPortfolio />
          <EmailSection />
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}
