import React from "react";
import { Info } from "../data/info.js";
import skills from "../data/skill.js";
import '../style/About.css'

const About = () => {
    return (
        <section className="Section-about">
            <div className="About-content">
                <h1>Sobre mim</h1>
                <p>{Info.about}</p>
            </div>

            <div className="About-skill">
                <h3>Tecnologias & Habilidades</h3>
                {skills.map((skill, i) => (
                    <span className="skill" key={i}>
                        {skill}
                    </span>
                ))}

                <div className="About-training">
                    <h3>Formação Acadêmica</h3>
                    <p>Análide e Desenvolvimento de Sistemas</p>
                    <p>4º Período • Em andamento</p>
                </div>
            </div>
        </section>
    );
};

export default About;
