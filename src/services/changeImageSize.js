export default function changeImageSize(imgLink) {
  const noSize = imgLink.split('I.jpg');
  const biggerImg = noSize.join('W.jpg');
  return biggerImg;
}
