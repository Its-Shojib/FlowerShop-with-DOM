function btnClick(e){
    let item = e.parentNode.parentNode.childNodes[1].innerText;
    let priceNode = e.parentNode.parentNode.childNodes[5].innerText;
    let priceString = priceNode.split(" ")[1]
    let price = parseFloat(priceString)

    
    let p = document.createElement("p");
    let container = document.getElementById("container")
    let count = container.childElementCount
    p.innerHTML = `${count+1}.&nbsp;&nbsp;&nbsp;${item}&nbsp;&nbsp;&nbsp;${price}`
    container.appendChild(p);
    
    
    let totalField = document.getElementById("totalPrice");
    let totalString = totalField.innerText;
    let totalPrice = parseFloat(totalString);
    let total = totalPrice + price;
    totalField.innerHTML = total;
}