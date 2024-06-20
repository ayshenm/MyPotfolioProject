"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems, skillsData } from "@/data";
import Title from "@/components/ui/Title";
import MotionViewport from "@/components/animation/motion-viewport";
import { varScale, varSlide } from "@/lib/variants";
import { Meteors } from "@/components/ui/Meteors";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import skillImg from "@/public/mainIcons.svg"

const Skills = () => {
  return (
    <MotionViewport variants={varSlide("right")} className="container mb-28">
      <Title className="w-[28rem] ml-auto mr-auto mb-20">Skills</Title>

      <section>
        <div className="overflow-hidden flex  shadow-lg shadow-indigo-500/50  justify-between relative p-4 sm:p-10 rounded-3xl">
        <div>
          <Image width={400} src={skillImg} alt=""/>
          </div>
          <div className="grid grid-cols-4 justify-center items-center gap-4">
            {skillsData.map((skill) => (
              <div key={skill.id} className="flex gap-x-2 border rounded-md shadow-lg p-3">
                <Image className="w-6 h-6" src={skill.icon} alt="" />
                {skill.title}
              </div>
            ))}
          </div>
          
          

          
        </div>
      </section>
    </MotionViewport>
  );
};

export default Skills;
