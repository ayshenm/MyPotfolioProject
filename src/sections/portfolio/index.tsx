"use client";
import React from "react";
import { projects } from "@/data";
// import { CardContainer } from "./ui/CardContainer";
import { FaLocationArrow } from "react-icons/fa6";
import { CardItem, CardBody, CardContainer } from "@/components/ui/3-d-Card";
import { LockKeyhole, Tv } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { varSlide } from "@/lib/variants";
import MotionViewport from "@/components/animation/motion-viewport";
import Title from "@/components/ui/Title";

const Project = () => {
  return (
    <MotionViewport variants={varSlide("left")} className="flex-1 w-full relative z-[1000]">
      <div id="portfolio" className="py-20 z-[1000] relative">
        <Title className="w-[28rem] ml-auto mr-auto mb-20 z-[1000]">Portfolio</Title>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <MotionViewport variants={varSlide("left")} key={project.id} className="relative z-[1000]">
              <CardContainer className="!z-[1000]">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-background dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border z-[1000]">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white">
                    {project.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-4">
                    Hover over this card to unleash the power of CSS perspective
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mb-6">
                    <Image
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      src={project.img}
                      alt={project.title}
                      height="500"
                      width="500"
                    />
                  </CardItem>

                  <CardItem className="flex flex-wrap gap-x-1 gap-y-2">
                    {project.iconLists.map((icon, index) => (
                      <div
                        className="text-xs bg-cyan-500/10 text-primary rounded-lg p-1"
                        key={index}>
                        {icon}
                      </div>
                    ))}
                  </CardItem>

                  <a
                    className="flex justify-end cursor-pointer w-full h-full px-4 py-5 rounded-xl text-foreground text-xs font-bold float-left"
                    href={project.link}
                    target="_blank">
                    Demo <Tv className="h-4 w-4 ml-1" />
                  </a>
                </CardBody>
              </CardContainer>
            </MotionViewport>
          ))}
        </div>
      </div>
    </MotionViewport>
  );
};

export default Project;
