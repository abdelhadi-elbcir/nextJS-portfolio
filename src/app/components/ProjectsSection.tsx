"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "WADFIATY.MA",
    description: "JOB BOARD WEBSITE IN MOROCCO",
    image: "/wadifaty.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://wadifaty.ma/",
  },
  {
    id: 2,
    title: "IRISI CLUB",
    description: "SCHOOL PROJECT",
    image: "/irisi.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.irisi-club.ma/",
  },
  {
    id: 3,
    title: "ECO NEST",
    description: "ECOLOGICAL HOUSE PROJECT",
    image: "/econest.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.eco-nest.site/",
  },
  {
    id: 4,
    title: "DRAAUNIVERS SARL",
    description: "DESCRIPTIVE WEBSITE FOR DRAAUNIVERS COMPANY",
    image: "/draaunivers.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://draaunivers.ma/",
  },
  {
    id: 5,
    title: "OFFRESEXCLUSIVES.NET",
    description: "DESCRIPTIVE WEBSITE FOR OFFRES EXCLUSIVES COMPANY",
    image: "/ox-net.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://offresexclusives.net/",
  },
  {
    id: 6,
    title: "OFFRESEXCLUSIVES.ORG",
    description: "BLOGGING WEBSITE",
    image: "/ox-org.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://offresexclusives.org/",
  },
  {
    id: 7,
    title: "WADIFATY MOBILE",
    description: "WADIFATY.MA MOBILE APP ANDROID",
    image: "/wadifaty-mobile.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/dev?id=8626687383138097841",
  },
  {
    id: 8,
    title: "DRAA.INFO",
    description: "MOBILE NEWS APP",
    image: "/draa-mobile.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/dev?id=8626687383138097841",
  },
];

const ProjectsSection:any = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag:any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
