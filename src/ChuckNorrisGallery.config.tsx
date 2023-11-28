const galleryConfig = {
  numberOfBoxesPerSide: 8,
  durationInSec: 0.3,
  margin: 160,
  colorPalette: ["#615810", "#333018", "#141203", "#5E5C4E", "#AD9C1D"],
};

const totalNumberOfBoxes = galleryConfig.numberOfBoxesPerSide ** 2;

export { galleryConfig, totalNumberOfBoxes };
