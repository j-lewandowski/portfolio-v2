"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../ui/section-heading";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4 mx-auto">
        <SectionHeading>About Me</SectionHeading>

        <div ref={ref} className="max-w-3xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg dark:prose-invert"
          >
            <p>
              Hi, I&apos;m Jakub Lewandowski — a Junior Fullstack Developer at
              Mood Up
            </p>
            <p>
              My journey in web development began with a curiosity for building
              engaging digital experiences. Since then, I&apos;ve developed a
              solid foundation in fullstack development, with a particular
              strength on the backend — especially working with NestJS.
            </p>
            <p>
              Currently, I&apos;m working at{" "}
              <a
                href="https://blockwise.pl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BlockWise
              </a>{" "}
              as a Junior Python Developer, where I build and deploy machine
              learning models.
            </p>
            <p>
              Outside of work, I enjoy exploring new technologies — lately, that
              curiosity has led me to dive into the fundamentals of machine
              learning. I&apos;m currently focused on learning how to build and
              train models from scratch, and understanding the core principles
              that power intelligent systems. You&apos;ll also often find me on
              the badminton court, unwinding with a good game.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
