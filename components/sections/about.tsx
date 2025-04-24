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
              Hi, I&apos;m Jakub Lewandowski and I&apos;m a Software Engineer.
              I&apos;m a React.js enthusiast specialising in full-stack
              development.
            </p>
            <p>
              My journey in web development started with a fascination for
              creating interactive user experiences. Over time, I&apos;ve honed
              my skills in modern JavaScript frameworks, with a particular focus
              on the React ecosystem.
            </p>
            <p>
              At the moment I&apos;m employed as a tutor at{" "}
              <a
                href="https://www.ambitni.edu.pl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AMBITNI
              </a>
              , an online IT school where I help aspiring developers master the
              fundamentals of web development.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or sharing my
              knowledge through tutorials and blog posts.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
