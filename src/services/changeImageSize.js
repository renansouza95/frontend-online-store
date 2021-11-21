export default function changeImageSize(imgLink, letter = 'W') {
  const noSize = imgLink.split('I.jpg');
  const biggerImg = noSize.join(`${letter}.jpg`);
  return biggerImg;
}
