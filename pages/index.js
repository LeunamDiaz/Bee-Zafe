import Calltoaction from "@/components/Calltoaction";
import Video from "@/components/Video";
import Navbar from "@/components/Navbar";
import Sensor from "@/components/Sensor";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Demo() {

  return (
    <>
      <Navbar />
      <Video />
      <section id="servicios" className="md:p-8 dark:bg-black text-white">
      <Sensor />
      </section>

      <Calltoaction />
      <Footer />



    </>
  );
}
