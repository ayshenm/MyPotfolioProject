/* eslint-disable react/no-unescaped-entities */
"use client";
import { Spotlight } from "@/components/ui/Spotlight";
import Photo from "@/src/assets/images/ay.jpeg";
import Image from "next/image";
import { Mouse } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimate } from "framer-motion";
import { FaHandsClapping, FaLocationArrow } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import MagicButton from "@/components/MagicButton";
import Link from "next/link";

import MotionViewport from "@/components/animation/motion-viewport";
import { varSlide } from "@/lib/variants";
import GradientButton from "@/components/ui/gradient-button";
import { Flame, MapPin } from "lucide-react";
import Socials from "./components/socials";

const Hero = () => {
  const [currentJobIndex, setCurrentJobIndex] = useState<number>(0);
  const [scope, animate] = useAnimate();

  const jobTitles = useMemo(() => ["Developer", "Programmer", "Coder"], []);

  const animateWithScope = useCallback(
    (animation: any) => {
      animate(scope.current, animation);
    },
    [animate, scope]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      animateWithScope({ opacity: 0, y: 20 });

      setTimeout(() => {
        setCurrentJobIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        animateWithScope({ opacity: 1, y: 0 });
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [animateWithScope, jobTitles]);

  return (
    <>
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center mt-10 md:mt-20">
        <div>
          <div className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold">
            <div className="flex gap-x-2 py-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-black-200">
                Hello{" "}
              </span>
              <FaHandsClapping className="text-3xl" />
            </div>

            <div className="flex gap-x-2 text-lg md:text-3xl py-2">
              <span className="flex items-center gap-x-1">
                I'm Ayisha Mirza
                <h5 ref={scope}>{jobTitles[currentJobIndex]}</h5>
              </span>
            </div>
            <div className="flex flex-col gap-y-5">
            <p className="text-mycolor-100 text-sm lg:text-lg font-medium">
              Frontend web developer, I create web pages with UI/UX user interface,
              <br /> I love my job and enjoy what I do
            </p>
            <Socials />
            </div>
            <div className="flex gap-x-3 py-2 -z-[100000000]">
              <a className="cursor-pointer z-50" href="#portfolio">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow className="text-lg" />}
                  position="right"
                />
              </a>
              <a className="z-50" href="/Ayshen Mirzeyeva.pdf" download="cv">
                <MagicButton
                  title="Download CV"
                  icon={<MdOutlineFileDownload className="text-lg" />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-5 md:mt-0">
            <div className="relative rounded-full bg-gradient-to-bl w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 animate-profile_animate home_img">
                <Image
                  sizes="auto"
                  src={Photo}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="home_img "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-28 animate-bounce">
        <Mouse size={28} />
      </div>
    </>
  );
};

export default Hero;
