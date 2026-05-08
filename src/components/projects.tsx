
"use client";

import Image from "next/image";
import { useState } from "react";


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

type ProjectStatus = "Under Maintenance" | "Ongoing";

type Project = {
  title: string;
  description: string;
  status: ProjectStatus;
  link?: string;
  tags: string[];
  image?: string;
};


const projects: Project[] = [
  {
    title: "nini: Hotel and Beach Resort Booking Application",
    status: "Under Maintenance",
    description:
      "A user-friendly booking application designed to simplify hotel and beach resort reservations. The system allows users to browse accommodations, check availability, book rooms online, and manage reservations efficiently, providing a convenient and seamless travel experience.",
    link: undefined,
    tags: ["Booking", "Web App"],
    image: PlaceHolderImages.find((i) => i.id === "project-ai")?.imageUrl || "",
  },
  {
    title: "My Portfolio",
    status: "Ongoing",
    description:
      "A personal portfolio website that showcases my skills, projects, achievements, and experiences in Computer Engineering, multimedia, and leadership. It reflects my creativity, technical abilities, and passion for innovation through an interactive and modern web design.",
    link: undefined,
    tags: ["Portfolio", "Next.js"],
    image: PlaceHolderImages.find((i) => i.id === "project-web")?.imageUrl || "",
  },
  {
    title: "Thalassa Web Application",
    status: "Ongoing",
    description:
      "A web-based platform developed to support the Thalassa project by providing monitoring, management, and data visualization features. The application aims to create an organized and accessible system for tracking marine-related environmental activities and information.",
    link: undefined,
    tags: ["Monitoring", "Dashboard"],
    image: PlaceHolderImages.find((i) => i.id === "project-robot")?.imageUrl || "",
  },
  {
    title: "Villahermosa Inventory System",
    status: "Ongoing",
    description:
      "An inventory management system designed to organize and monitor products, stocks, and transactions efficiently. The system helps improve inventory tracking, reduces manual work, and provides accurate records for better business operations.",
    link: undefined,
    tags: ["Inventory", "Management"],
    image: PlaceHolderImages.find((i) => i.id === "project-ai")?.imageUrl || "",
  },
  {
    title:
      "Thalassa: AI-Based Buoy Marine Surface Waste Detection, Collection, and Segregation System Using Image Processing",
    status: "Ongoing",
    description:
      "An innovative environmental project that utilizes Artificial Intelligence and Image Processing to detect, collect, and segregate marine surface waste through an automated buoy system. The project aims to contribute to ocean conservation by promoting smarter and more sustainable waste management solutions.",
    link: undefined,
    tags: ["AI", "Image Processing"],
    image: PlaceHolderImages.find((i) => i.id === "project-web")?.imageUrl || "",
  },
  {
    title: "HTML Fundamentals Activity: Movie Showcase Website",
    status: "Ongoing",
    description:
      "A collection of movies with trailers and ratings.",
    link: "https://prtynce.github.io/CineMovie/",
    tags: ["HTML", "Movies"],
    image: PlaceHolderImages.find((i) => i.id === "project-robot")?.imageUrl || "",
  },
];


export function Projects() {
  const filteredProjects = projects;

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-headline font-bold mb-4">PROJECTS</h2>
            <p className="text-muted-foreground">A selection of my latest work and ongoing projects.</p>
          </div>
          
          <div className="flex flex-wrap gap-2" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={project.title} className="group glass-card rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 animate-reveal" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    className={cn(
                      "rounded-full px-3 py-1",
                      project.status === "Under Maintenance"
                        ? "bg-orange-500/20 text-orange-500"
                        : "bg-blue-500/20 text-blue-500"
                    )}
                  >
                    {project.status}
                  </Badge>

                </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex"
                      >
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full shadow-lg"
                          type="button"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      </a>
                    ) : (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full shadow-lg"
                        type="button"
                        disabled
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    )}
                  </div>

              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary/70 bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
