"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java/JEE/Android</li>
        <li>Scrum/UML/Merise</li>
        <li>JavaScript/Node.js/Express.js/React.js</li>
        <li>PHP/Laravel</li>
        <li>Docker/Kubernetes</li>
        <li>HTML5/CSS3/WordPress/Blogger</li>
        <li>Git/GitHub</li>
        <li>Architecture MVC/REST API</li>
        <li>SQL/PLSQL/MySQL</li>
        <li>Linux/SMTP/Selenium</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bac Science Physique 2020</li>
        <li>
          Diplôme D'études Universitaires Scientifiques Et Techniques 2022
        </li>
        <li>
          Ingénierie Informatique Et Systèmes D'information (Actuellement) 2024
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Introduction to Containers w/ Docker, Kubernetes - IBM</li>
        <li>Developing Back-End Apps with Node.js and Express - IBM</li>
        <li>Introduction to Git and GitHub - Google</li>
        <li>Advanced React - Meta</li>
        <li>React Basics - Meta</li>
        <li>JavaScript - Great Learning</li>
        <li>Programming with JavaScript - Meta</li>
        <li>Android Application Development - Great Learning</li>
        <li>PHP - Sololearn</li>
        <li>React + Redux - Sololearn</li>
        <li>Introduction to JavaScript - Sololearn</li>
        <li>Introduction to SQL - Sololearn</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="about picture"
          src="/about-pic.jpeg"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          A backend developer proficient in Java and Java EE, with a focus on Spring Boot, 
          plays a crucial role in building the server-side components of modern web applications. 
          Java serves as the primary programming language, while frameworks like Java EE and Spring 
          Boot provide a robust foundation for developing scalable, maintainable, and efficient 
          backend systems.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
