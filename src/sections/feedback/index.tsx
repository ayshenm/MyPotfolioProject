"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { varSlide } from "@/lib/variants";
import MotionViewport from "@/components/animation/motion-viewport";
import Title from "@/components/ui/Title";

const Feedback = () => {
  return (
    <>
      <MotionViewport className="w-full lg:w-1/2 mt-28 mb-28" variants={varSlide("left")}>
      <Title className="w-[28rem] text-start">FeedBack</Title>
      </MotionViewport>

      <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
    </>
  );
};
export default Feedback;

const testimonials = [
  {
    quote: "Aisha is a very responsible and skilled developer in her work",
    name: "Rashad Cahangirov",
    title: "Architect Lead, Ceo",
  },
  {
    quote:
      "If you give Ayesha a project, she can do it without sleeping at night. In two words, she is responsible and flexible :)",
    name: "Alvin Seyidov",
    title: "Senior Backend developer",
  },
  {
    quote:
      "Ayesha's work and contributions to our startup are great, she is creative and responsible, open to learning",
    name: "Tunar Alyarzada",
    title: "Middle Frontend Developer",
  },
  {
    quote: "The first time I saw Aysha's code, I realized how important it would be to our project",
    name: "Jeyhun Rahimli",
    title: "Software Engineer",
  },
];
