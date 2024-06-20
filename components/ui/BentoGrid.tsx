"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { Meteors } from "./Meteors";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-8 lg:gap-8 mx-auto",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id?: number;
}) => {
  return (
    <>
      <div
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none items-center flex flex-col space-y-4 justify-center",
          className
        )}
        style={{
          background: "rgb(4,7,29)",
          backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}>
        <div className={`${id === 2 && "flex justify-center"} h-full`}>
          <div
            className={cn(
              titleClassName,
              "justify-center items-center group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}>
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">{title}</div>
          </div>
        </div>

        {/* {id === 3 && <Meteors number={20} />} */}

        {id === 1 && (
          <div className="flex mx-auto  gap-1 w-fit absolute h-[30rem]  lg:gap-5 lg:justify-center">
            <div className="flex justify-center flex-col gap-3 lg:gap-8">
              {["HTML", "CSS", "Javascript"].map((item) => (
                <span
                  key={item}
                  className="rounded-lg text-center py-2 px-3 text-xs opacity-50 lg:py-4 lg:px-3 lg:text-base lg:opacity-100 bg-[#10132E] ">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 lg:gap-8">
              {["TypeScript", "React Js", "Next Js"].map((item) => (
                <span
                  key={item}
                  className="rounded-lg text-center py-2 px-3 text-xs opacity-50 lg:py-4 lg:px-3 lg:text-base lg:opacity-100 bg-[#10132E] ">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-3 lg:gap-8">
              {["Jquery", "Bootstrap Css", "Tailwind Css"].map((item) => (
                <span
                  key={item}
                  className="rounded-lg text-center py-2 px-3 text-xs opacity-50 lg:py-4 lg:px-3 lg:text-base lg:opacity-100 bg-[#10132E] ">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 lg:gap-8">
              {["Material Ui", "Aceternity UI", "Shadcn Ui"].map((item) => (
                <span
                  key={item}
                  className="rounded-lg text-center py-2 px-3 text-xs opacity-50 lg:py-4 lg:px-3 lg:text-base lg:opacity-100 bg-[#10132E] ">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col justify-center gap-3 lg:gap-8">
              {["Figma", "Photoshop", "Github"].map((item) => (
                <span
                  key={item}
                  className="rounded-lg text-center py-2 px-3 text-xs opacity-50 lg:py-4 lg:px-3 lg:text-base lg:opacity-100 bg-[#10132E] ">
                  {item}
                </span>
              ))}
            </div>
            <Meteors number={20} />
          </div>
        )}
      </div>
    </>
  );
};
