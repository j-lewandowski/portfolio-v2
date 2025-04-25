"use client";

import { Button } from "@/components/ui/button";
import { heroData } from "@/data/hero";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-background">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--foreground),0.15),transparent_50%)]"
        aria-hidden="true"
      />
      <div ref={ref} className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <Image
                src="/images/hello.svg"
                alt="Jakub Lewandowski"
                width={280}
                height={280}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="absolute top-0 left-[60%] -translate-x-1/2 -translate-y-1/4"
            >
              <div className="flex w-48 justify-center items-center bg-background border border-border rounded-full px-4 py-2 shadow-lg">
                <span className="mr-2 text-md">{heroData.bubbleText}</span>
                <span className="font-bold text-lg bg-primary text-primary-foreground px-3 py-1 rounded-md">
                  Jakub
                </span>
              </div>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            {heroData.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-3 text-lg text-muted-foreground"
          >
            {heroData.techStack.map((tech, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
                )}
                <span className="text-md">{tech}</span>
              </React.Fragment>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-4 mt-6"
          >
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
