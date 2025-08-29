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
  if (e.target.className.includes("copy-btn")) {
    const copyButton = e.target;
    const number = copyButton.parentNode.parentNode.children[3].innerText;
    navigator.clipboard.writeText(number);
    const totalCopy = getElement("copy-count");
    let currCopy = Number(totalCopy.innerText);
    currCopy++;
    totalCopy.innerText = currCopy;
    alert(`Number Copied: ${number}`);
  }
});