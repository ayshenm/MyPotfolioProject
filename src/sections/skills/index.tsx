"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { skillsData } from "@/data";
import Title from "@/components/ui/Title";
import MotionViewport from "@/components/animation/motion-viewport";
import { varScale, varSlide } from "@/lib/variants";
import { Meteors } from "@/components/ui/Meteors";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import skillImg from "@/src/assets/svg/mainIcons.svg";
const Skills = () => {
  return (
    <MotionViewport variants={varSlide("left")} className="mt-28 mb-28">
      <Title className="w-[28rem] ml-auto mr-auto mb-28">Skills</Title>

      <section>
        <div className="overflow-hidden flex flex-col md:flex-row  shadow-lg shadow-indigo-500/50  justify-between relative p-4 sm:p-10 rounded-3xl">
          <div>
            <Image width={400} src={skillImg} alt="" />
          </div>
          <div className="grid grid-cols-4 justify-center items-center gap-4">
            {skillsData.map((skill) => (
              <div key={skill.id} className="flex gap-x-2 border rounded-md shadow-lg p-3">
                <Image width={24} height={24} src={skill.icon} alt="" />
                <span className="hidden md:block">{skill.title}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </MotionViewport>
  );
};

export default Skills;
