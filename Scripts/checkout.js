function finalpay(){
    window.location.href = "orderplaced.html";
}


var data = JSON.parse(localStorage.getItem("cartData"));

var redtotal1 = data.reduce(function(sum,elem){
    return sum + elem.qty*elem.price;
    
},0)

document.querySelector("#subtotal").innerText=redtotal1+590;
document.querySelector("#grandtotal").innerText=redtotal1+590;