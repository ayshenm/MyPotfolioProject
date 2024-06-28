/* eslint-disable react/jsx-no-undef */
"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaHandsClapping, FaLocationArrow } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import MagicButton from "../../../../components/MagicButton";
import Link from "next/link";
import Image from "next/image";
import Photo from "@/src/assets/images/ay.jpeg";
import MotionViewport from "@/components/animation/motion-viewport";
import { varSlide } from "@/lib/variants";
import GradientButton from "@/components/ui/gradient-button";
import { Flame } from "lucide-react";

const HeroWrapper = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/*col-span 8 */}

        <MotionViewport
          variants={varSlide("left")}
          className="col-span-8 place-self-center text-left justify-self-start">
          <h1 className="mb-4 text-4xl md:text-4xl lg:5xl font-poppins font-semibold">
            <div className="flex gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-black-200">
                Hello{" "}
              </span>
              <FaHandsClapping className="text-3xl" />
            </div>
            <div className="h2"></div>
            <TypeAnimation
              sequence={[
                "I'm Ayisha Mirza Frontend Developer",
                1000,
                "I'm Ayisha Mirza Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-mycolor-100 text-base mb-6 lg:text-lg">
            Frontend web developer, I create web pages with UI/UX user interface,
            <br /> I love my job and enjoy what I do
          </p>

          <div className="flex gap-x-3 mb-6 -z-[100000]">
            <a className="cursor-pointer z-50" href="#portfolio">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow className="text-lg" />}
                position="right"
              />
            </a>
            <a href="/Mirzayeva Ayshen.pdf" download="cv">
              <MagicButton
                title="Download CV"
                icon={<MdOutlineFileDownload className="text-lg" />}
                position="right"
              />
            </a>
          </div>
        </MotionViewport>

        {/*col-span 4 */}

        <MotionViewport
          variants={varSlide("left")}
          className="col-span-4 place-self-center mt-4 md:mt-0">
          <div
            className="relative rounded-full bg-gradient-to-bl
                from-mycolor-100 to-mycolor-500 
                w-[250px] h-[250px]
                lg:w-[400px] lg:h-[400px]
                ">
            <div className="absolute inset-0 animate-profile_animate home_img">
              <Image src={Photo} alt="" layout="fill" objectFit="cover" className=" home_img " />
            </div>
          </div>
        </MotionViewport>
      </div>
    </section>
  );
};

export default HeroWrapper;
