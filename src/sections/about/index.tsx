"use client";
import Title from "@/components/ui/Title";
import { varSlide } from "@/lib/variants";
import MotionViewport from "@/components/animation/motion-viewport";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import AboutImg from "@/src/assets/images/aboutImg.jpeg";
import { TextRevealCard } from "@/components/ui/card-text-reveal";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="container relative mt-10 p-4 lg:p-10">
      <Title className="text-right" textureClassName="w-full lg:w-[30rem] ml-auto">
        About me
      </Title>
      
      <div className="flex flex-col justify-center gap-y-8 lg:flex-row lg:gap-x-8">
        <MotionViewport variants={varSlide("right")} className="w-full lg:w-[500px]">
          <BackgroundGradient>
            <Image src={AboutImg} alt="about image" className="w-full rounded-3xl overflow-hidden" />
          </BackgroundGradient>
        </MotionViewport>

        <MotionViewport variants={varSlide("left")} className="w-full lg:w-3/5">
          <div className="text-muted-foreground mb-4 text-right flex flex-col gap-y-4 p-4 lg:p-0">
            <p className="text-xl text-purple">
              Welcome to my portfolio website. My name is Ayisha Mirza. I am a Frontend developer.
            </p>

            <p className="italic">
              I am constantly improving myself in the field of frontend development. I have a solid
              foundation in core web technologies such as HTML, CSS, and JavaScript, and I gain
              experience working with modern frontend frameworks (for example, React or Next.js). I
              actively worked on frontend development during my education and in my own projects. I
              am interested in topics such as user interface design, UI/UX principles, and responsive
              web design, and I constantly try to improve myself in these areas. I am currently
              working as a <span className="text-purple">Junior Frontend Developer</span> in a local startup.
            </p>

            <TextRevealCard
              className="z-50"
              text="Hover over to see my slogan;)"
              revealText="'Fall seven times, stand up eight'"
            />
          </div>
        </MotionViewport>
      </div>
    </section>
  );
};

export default About;
