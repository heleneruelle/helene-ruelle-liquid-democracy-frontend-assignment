import React, { useState, useEffect } from "react";
import "../styles/CardLayout.css";
import { CARD_LAYOUT_GRID, CARD_LAYOUT_LIST } from "../config";
import CardLayoutToggle from "./CardLayoutToggle";
import ProjectCard from "./ProjectCard";
import useIsMobile from "../hooks/useIsMobile";

const CardLayout = ({ projects }) => {
  const isMobile = useIsMobile();

  // Default value for state is for desktop use
  const [view, setView] = useState(CARD_LAYOUT_GRID);

  // Set default for each device category on resize
  useEffect(() => {
    if (isMobile) {
      setView(CARD_LAYOUT_LIST);
    } else {
      setView(CARD_LAYOUT_GRID);
    }
  }, [isMobile]);

  return (
    <div className="card-layout">
      {!isMobile && <CardLayoutToggle view={view} onToggle={setView} />}
      <div className={`cards-container ${view}`}>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
