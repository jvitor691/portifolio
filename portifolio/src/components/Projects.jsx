import React from "react";
import "../style/projects.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-header">
                <h1>Projetos</h1>
                <p>
                    Alguns projetos desenvolvidos para praticar, evoluir e aplicar conceitos
                    de desenvolvimento web.
                </p>
            </div>

            <div className="projects-container">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={32}
                    slidesPerView={4}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Projects;
