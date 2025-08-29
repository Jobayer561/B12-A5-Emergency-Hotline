function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
getElement("card-box").addEventListener("click", function (e) {
  if (e.target.className.includes("heart")) {
    const totalHeart = getElement("heart-count");
    let currHeart = Number(totalHeart.innerText);
    currHeart++;
    totalHeart.innerText = currHeart;
  }
});
