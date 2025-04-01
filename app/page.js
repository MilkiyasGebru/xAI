import Image from "next/image";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Features from "@/components/Features";
import QuickStart from "@/components/QuickStart";
import Models from "@/components/Models";
import ComingSoon from "@/components/ComingSoon";
import Calculator from "@/components/Calculator";
import NewsPage from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div className=" mx-auto font-[Gidole] text-neutral-400 relative">
          <Navbar />
          <Intro />
          <Features />
          <QuickStart />
          <Models />
          <ComingSoon />
          <Calculator />
          <NewsPage />
          <Footer />
      </div>
  );
}
