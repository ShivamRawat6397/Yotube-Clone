export const API_KEY = "AIzaSyBA0ZXWjUlrZole0zpIaMHSr-dlJurd1Hg";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
