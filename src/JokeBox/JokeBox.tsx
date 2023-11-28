import React, { useState } from "react";
import "./JokeBox.css";

export interface JokeBoxProps {
  color: string;
  width: number;
  height: number;
  words: string;
  firstRow: boolean;
}

export interface JokeBoxState {
  hovered: boolean;
}

const JokeBox = ({ color, width, height, words, firstRow }: JokeBoxProps) => {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const getClassName = () => {
    return "JokeBox" + (hovered ? " hovered" : "") + (open ? " turned" : "");
  };

  const computeSizeCss = () => ({
    width: width + "px",
    height: height + "px",
  });

  const toggleOpenBox = (ev: React.SyntheticEvent<HTMLElement>) => {
    ev.preventDefault();
    setOpen((op) => !op);
  };

  return (
    <div
      className={getClassName()}
      style={computeSizeCss()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={toggleOpenBox}
    >
      <div className="rotation-wrapper">
        <div className="front" style={{ backgroundColor: color }}></div>
        <div className="back">
          <div
            className={"small-text" + (firstRow ? " no-scaling" : "")}
            style={{ backgroundColor: "var(--app-bg-col)" }}
          >
            {words}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JokeBox;
