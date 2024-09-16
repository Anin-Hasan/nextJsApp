"use client";

import { motion } from "framer-motion";
import React from "react";
// import { Button } from "@/components/ui/button";
import DotPattern from "./ui/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import BlurIn from "./ui/magicui/blur-in";
import AnimatedImage from "./ui/AnimatedImage";
import { Button } from "flowbite-react";
import Link from "next/link";

const MotionDiv = motion.div;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <main>
      <div className="z-0 relative min-h-screen w-full pb-40 overflow-hidden bg-[radial-gradient(97.14%_56.45%_at_51.63%_0%,_#7D56F4_0%,_#4517D7_30%,_#000_100%)]">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(50vw_circle_at_center,white,transparent)]"
          )}
        />
        <MotionDiv
          className="relative z-10 flex flex-col items-center justify-start min-h-screen space-y-6 px-4 pt-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <BlurIn
              word="Think Creative"
              className="font-display text-center text-4xl font-bold text-white w-full lg:w-auto max-w-3xl mx-auto z-10"
              duration={1}
            />
          </motion.div>

          <motion.h2
            className=" text-white text-opacity-60 tracking-normal text-center max-w-2xl mx-auto z-10"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            numquam similique nam deserunt minima eum quidem repudiandae,
            corrupti inventore illo. Velit non aliquam iure error porro, beatae
            expedita possimus facilis?
          </motion.h2>

          <div className="flex gap-x-4">
            <Button className="rounded-xl shadow-md p-2 hover:bg-white hover:text-black duration-300  ">
              <Link href="/about">About</Link>
            </Button>
            <Button className="rounded-xl shadow-md p-2 hover:bg-white hover:text-black duration-300  ">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          <motion.div variants={itemVariants}>
            <AnimatedImage
              src="/image.webp"
              alt="Image"
              width={1200}
              height={900}
              className="w-full h-auto max-w-6xl mx-auto rounded-2xl shadow-lg"
            />
          </motion.div>
        </MotionDiv>
      </div>
    </main>
  );
}
