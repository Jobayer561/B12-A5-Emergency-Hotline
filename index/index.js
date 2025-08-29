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
  if (e.target.className.includes("call-btn")) {
    const totalCoin = getElement("coin");
    let currCoin = Number(totalCoin.innerText);
    if (currCoin <= 0) {
      alert("Insufficient coin.Minimum 20 coins required to make a call");
      return;
    }
    const heartButton = e.target;
    const title = heartButton.parentNode.parentNode.children[1].innerText;
    const num = heartButton.parentNode.parentNode.children[3].innerText;
    currCoin = currCoin - 20;
    totalCoin.innerText = currCoin;
    alert(`📞 Calling ${title} ${num}...`);
        const showContainer = getElement("show-container");

    const show = document.createElement("div");
    show.innerHTML = `
     <div class="bg-[#FAFAFA]  rounded-xl flex justify-between items-center mt-3 p-4">
                  <div class="">
                    <h2 class="font-bold">${title}</h2>
                    <h2 class="">${num}</h2>
                  </div>
                  <div class="whitespace-nowrap">${new Date().toLocaleTimeString()}</div>
            </div>
    `;
    showContainer.append(show)
  }

});
getElement('button-clear').addEventListener('click',function(){
    const clearContainer = getElement('show-container')
    clearContainer.innerHTML = "";
})
