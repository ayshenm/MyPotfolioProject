"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import HeroWrapper from "@/src/sections/hero/components/HeroWrapper";
import Photo from "../../ay.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mouse } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className="flex relative  z-10 justify-between mt-20">
        <div className="max-w-[89vw]  flex flex-col">
          <HeroWrapper />
        </div>
      </div>
      <div className="flex justify-center mt-28 animate-bounce ">
        <Mouse size={28} />
      </div>
    </>
  );
};

export default Hero;
