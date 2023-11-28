import React, { useEffect, useState, useCallback } from "react";

import JokeBox from "./JokeBox/JokeBox";
import { galleryConfig, totalNumberOfBoxes } from "./ChuckNorrisGallery.config";
import { Gallery } from "./Gallery";
import useFacts from "./useFacts";
const ChuckNorrisGallery = () => {
  const { facts } = useFacts();
  const [colors, setColors] = useState([] as string[]);

  useEffect(
    () =>
      setColors(
        new Array(totalNumberOfBoxes).fill("").map(
          (
            c // random color from palette
          ) =>
            galleryConfig.colorPalette[
              Math.floor(Math.random() * galleryConfig.colorPalette.length)
            ]
        )
      ),
    []
  );

  const renderBoxesWithColors = useCallback(
    (boxSize: number) =>
      colors.map((col: string, index) => (
        <JokeBox
          color={col}
          width={boxSize}
          height={boxSize}
          firstRow={index < galleryConfig.numberOfBoxesPerSide}
          key={index}
          words={facts[index]}
        ></JokeBox>
      )),
    [colors, facts]
  );

  return (
    <Gallery
      numberOfBoxesPerSide={galleryConfig.numberOfBoxesPerSide}
      durationInSec={galleryConfig.durationInSec}
      margin={galleryConfig.margin}
      renderBoxes={renderBoxesWithColors}
    ></Gallery>
  );
};

export default ChuckNorrisGallery;
