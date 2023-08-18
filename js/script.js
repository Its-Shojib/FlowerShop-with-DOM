let container = document.getElementById("container")
let count = container.childElementCount;
count =0;
function btnClick(e){
    let item = e.parentNode.parentNode.childNodes[1].innerText;
    let priceNode = e.parentNode.parentNode.childNodes[5].innerText;
    let priceString = priceNode.split(" ")[1]
    let price = parseFloat(priceString)

    
    let p = document.createElement("p");
    count++;
    p.innerHTML = `${count}.&nbsp;&nbsp;&nbsp;${item}&nbsp;&nbsp;&nbsp;${price}`
    p.classList.add("remove");
    container.appendChild(p);
    
    
    let totalField = document.getElementById("totalPrice");
    let totalString = totalField.innerText;
    let totalPrice = parseFloat(totalString);
    let total = totalPrice + price;
    totalField.innerText = total;
    // if(count >8){
    //     alert("ALALLA");
    // }
}

function removeElement(){
    let removee = document.querySelectorAll(".remove");
    for (let remove of removee) {
      remove.style.display = "none";
    }
    let totalField = document.getElementById("totalPrice");
    totalField.innerText = "00";
    count = 0;
}