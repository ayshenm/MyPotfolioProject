"use client";
import Title from "@/components/ui/Title";
import { varSlide } from "@/lib/variants";
import MotionViewport from "@/components/animation/motion-viewport";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import AboutImg from "@/src/assets/images/aboutImg.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="container relative mt-10 p-4 lg:p-10">
      <Title className="mb-20" textureClassName="ml-20 lg:w-[30rem]">
        About me
      </Title>

      <div className="flex flex-col justify-center gap-y-8 lg:flex-row lg:gap-x-8">
        <MotionViewport variants={varSlide("left")} className="w-full lg:w-[500px]">
          <div className="flex justify-center items-center p-4">
            <div className="relative rounded-full sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 max-w-full">
              <div className="!w-60 !h-40">
                <Image
                  src={AboutImg}
                  alt="About Image"
                  layout="fill"
                  objectFit="cover"
                  className="home_img"
                />
              </div>
            </div>
          </div>
        </MotionViewport>

        <MotionViewport variants={varSlide("left")} className="w-full lg:w-3/5">
          <div className="bg-redtext-muted-foreground mb-4 text-right flex flex-col gap-y-4 p-4 lg:p-0">
            <p className="text-xl text-purple  text-center md:!text-right">
              Welcome to my portfolio website. My name is Ayisha Mirza. I am a Frontend developer.
            </p>

            <p className="italic text-center md:!text-right">
              I am a passionate frontend developer with a strong foundation in HTML, CSS, and
              JavaScript, specializing in modern web technologies. I have hands-on experience
              working with frameworks such as React, Next.js, and Vite, along with state management
              tools like Redux. I excel in building scalable and visually appealing user interfaces
              using Tailwind CSS, ShadCN UI, and Aceternity UI. Additionally, I have expertise in
              Three.js, allowing me to create immersive 3D experiences on the web. I focus on UI/UX
              principles, responsive design, and performance optimization to deliver seamless user
              interactions. For authentication and security, I am proficient in NextAuth for
              integrating secure and flexible authentication solutions in Next.js applications. My
              continuous learning mindset drives me to stay updated with the latest trends and best
              practices in frontend development, ensuring high-quality, cutting-edge solutions
              <span className="text-purple"> Frontend Developer</span> in a local startup.
            </p>
          </div>
        </MotionViewport>
      </div>
    </section>
  );
};

export default About;
