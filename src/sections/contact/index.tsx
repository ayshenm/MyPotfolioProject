"use client";
import { Button } from "@/components/complex/button";
import { Input } from "@/components/complex/input";
import { Textarea } from "@/components/complex/textarea";
import { useForm } from "@/hooks/useForm";
import { Loader2, Send } from "lucide-react";
import { FormEvent, useEffect } from "react";
import Title from "@/components/ui/Title";
import { useAsync } from "@/hooks/useAsync";
import { Toaster } from "@/components/complex/sonner";
import MotionViewport from "@/components/animation/motion-viewport";
import { varSlide } from "@/lib/variants";
import Image from "next/image";
import { toast } from "sonner";

import ContactImg from "@/src/assets/svg/contact.svg";

const Contact = () => {
  const { register, isFormValid } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const { isLoading, isSuccess, mutate } = useAsync();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Message sent successfully!");
    }
  }, [isSuccess]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate();
  };

  return (
    <section id="contact" className="container flex items-center mb-10 !z-[10]">
      <MotionViewport className="w-[40%] hidden lg:block" variants={varSlide("right")}>
        <div className="w-full">
          <Image className="rounded w-96" src={ContactImg} alt="" />
        </div>
      </MotionViewport>           

      <MotionViewport className="w-full lg:w-1/2 z-50" variants={varSlide("left")}>
        <div className="w-full">
          <Title className="mb-4 text-right" textureClassName="ml-auto translate-x-14">
            Get in touch
          </Title>

          <p className="text-muted-foreground text-right mb-4">
            Let&#39;s make something great together!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 !z-[100]">
            <Input placeholder="Name" {...register("name")} />

            <Input placeholder="Email" type="email" {...register("email")} />

            <Textarea
              placeholder="Type your message here..."
              className="col-span-2 h-[14vh]"
              {...register("message")}
            />

            <Button type="submit" className="col-span-2" disabled={isLoading || !isFormValid}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Send It <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </MotionViewport>

      <Toaster />
    </section>
  );
};

export default Contact;
