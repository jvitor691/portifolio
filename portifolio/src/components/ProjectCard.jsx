import React from "react";
import "../style/projectCard.css";



const ProjectCard = ({ project }) => {
    const { title, description, image, link, icon } = project;

    return (
        <article className="project-card">
            <img src={image} alt={title} />

            <span> {icon} </span>
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver projeto
                </a>
            </div>
        </article>
    );
};

export default ProjectCard;
