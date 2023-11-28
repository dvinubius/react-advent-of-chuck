import React, { useEffect, useMemo } from "react";
import "./Gallery.css";

export interface GalleryProps {
  numberOfBoxesPerSide: number;
  durationInSec: number;
  margin: number;
  renderBoxes: (boxSize: number) => any[];
}

export const Gallery = ({
  numberOfBoxesPerSide,
  durationInSec,
  margin,
  renderBoxes,
}: GalleryProps) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--duration",
      durationInSec + ""
    );
    document.documentElement.style.setProperty("--gallery-margin", margin + "");
  }, [durationInSec, margin]);

  const _computeBoxSize = (
    totalW: number,
    totalH: number,
    marg: number,
    boxesPerSide: number
  ): number => Math.floor((Math.min(totalW, totalH) - 2 * marg) / boxesPerSide);

  const boxSize = useMemo(
    () =>
      _computeBoxSize(
        window.innerWidth,
        window.innerHeight,
        margin,
        numberOfBoxesPerSide
      ),
    [margin, numberOfBoxesPerSide]
  );

  const _computeStyle = (bSize: number, numberBoxes: number) => ({
    "--size": bSize * numberBoxes + "px",
  });

  const style = useMemo(() => _computeStyle(boxSize, numberOfBoxesPerSide), [
    boxSize,
    numberOfBoxesPerSide,
  ]) as React.CSSProperties;

  return (
    <div className={"GalleryLayout"} style={style}>
      {renderBoxes(boxSize)}
    </div>
  );
};
