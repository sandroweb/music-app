export const getHexCompleted = (hex: string): string => {
  return hex.length === 4 ? hex.split('').map(it => it !== '#' ? it + it : it).join('') : hex;
}

export const getLightenDarkenColor = (hex: string, amt:number): string => {
  var usePound = false;
  if (hex[0] === "#") {
     hex = hex.slice(1);
     usePound = true;
  }
  var num = parseInt(hex, 16);
  var r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  var b = ((num >> 8) & 0x00FF) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  var g = (num & 0x0000FF) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

export const getRgbaByHex = (hex: string, alpha?: number): string => {
  const [r, g, b] = getHexCompleted(hex).match(/\w\w/g)?.map(x => parseInt(x, 16)) || [null, null, null];
  if (typeof alpha !== 'number' || alpha >= 1 || alpha < 0) {
    return hex;
  }
  return `rgba(${r},${g},${b},${alpha})`;
};

export const getLigthenColor = (hex: string): string => {
  return getLightenDarkenColor(getHexCompleted(hex), 25);
}

export const getDarkenColor = (hex: string): string => {
  return getLightenDarkenColor(getHexCompleted(hex), -25);
}