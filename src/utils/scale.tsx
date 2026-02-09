import {Dimensions, PixelRatio} from 'react-native';

// Base design dimensions (width and height) for reference
const baseWidth = 390;
const baseHeight = 844;

// Get current screen dimensions
const {width, height} = Dimensions.get('window');

// Calculate scale factors based on the device's width and height
const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;

// Function to scale size based on width
export const moderateScaleWidth = (size: number, factor = 0.5) => {
  return size + (scaleWidth - 1) * (factor * size);
};

// Function to scale size based on height
export const moderateScaleHeight = (size: number, factor = 0.5) => {
  return size + (scaleHeight - 1) * (factor * size);
};

// Function to moderate scale based on both width and height
export const moderateScale = (size: number, factor = 0.5) => {
  const scaleFactor = Math.min(scaleWidth, scaleHeight); // Use the smaller of the two scale factors
  return size + (scaleFactor - 1) * (factor * size);
};

// Function to adjust size based on pixel density
export const scaleWithPixelRatio = (size: number) => {
  const pixelRatio = PixelRatio.get();
  return size * pixelRatio;
};
export {height as SCREEN_HEIGHT, width as SCREEN_WIDTH};
