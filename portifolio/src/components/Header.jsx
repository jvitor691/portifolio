import React from 'react';
import '../style/header.css';
import { Info } from '../data/info.js';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import WavingHandTwoToneIcon from '@mui/icons-material/WavingHandTwoTone';

const Header = () => {
  return (
    <header className="header-section" id="home">
      <div className="header-content">

        <span className="header-eyebrow">
          <WavingHandTwoToneIcon /> Olá, eu sou
        </span>
        <h1 className="header-name">{Info.name}</h1>
        <p className="header-title">{Info.title}</p>
        <p className="header-tagline">{Info.tagline}</p>

        <div className="header-button">
          <a href="#projects" className="btn primary">
            Ver projetos <ArrowForwardIcon />
          </a>

          <a
            href={Info.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            <GitHubIcon /> GitHub
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
