var cartData = [
    {
    qty: 3,
    price: 603.00,
    discount: "",
    productname: "Waterproof Handlebar Bag Folding Storage Pack for Electric Scooter Bicycle",
    producturl: "https://img.gkbcdn.com/p/2019-06-14/scooter-front-tube-bag-tools-storage-for-xiaomi-mijia-m365-black-1574132871919._w280_.jpg",
    strickedoff:"" },
    {
    price:782.00,
    qty:2,
    discount: "",
    productname: "Stunt Scooter with Aluminium Handlebar with disc brakes Black",
    producturl: "https://img.gkbcdn.com/p/2021-08-26/janobike-t10-folding-electric-scooter-23ah-1000w-x2-motor-black-1629949298856._w280_.jpg",
    strickedoff:"" },
    {
    price: "1373",
    qty:2,
    discount: "",
    productname: "Portable Quick-drying  Superfine Fiber With Silicone Sleeve For Travel Outdoor-Gray",
    producturl: "https://img.gkbcdn.com/p/2020-05-07/30-x-100cm-Portable-Quick-drying-Cooling-Towel-Gray-903740-._w280_.jpg",
    strickedoff:"",}
    ];

localStorage.setItem("cartData",JSON.stringify(cartData));



var data = JSON.parse(localStorage.getItem("cartData"));

data.forEach(function(elem,index){

    var price = elem.qty*elem.price;

    let mid3div = document.createElement("div");
    mid3div.setAttribute("id","mid3div");

    let prodimg = document.createElement("img");
    prodimg.src = elem.producturl;
    prodimg.setAttribute("id","prodimg");

    let proddesc = document.createElement("p");
    proddesc.innerText = elem.productname;
    proddesc.setAttribute("id","proddesc");

    let prodprice = document.createElement("p");
    prodprice.innerText ="₹"+ elem.price;
    prodprice.setAttribute("id","prodprice");

    let prodqty = document.createElement("p");
    prodqty.setAttribute("id","prodqty");
    prodqty.innerText = "X" + elem.qty;

    let price2 = document.createElement("p");
    price2.innerText = "₹"+price;
    price2.setAttribute("id","price2");

    document.querySelector("#shipping").innerText = 590;

    mid3div.append(prodimg,proddesc,prodprice,prodqty,price2);
    
    document.querySelector("#mid2box").append(mid3div);

});

var redtotal1 = data.reduce(function(sum,elem){
    return sum + elem.qty*elem.price;
    
},0)
console.log(redtotal1);

var ship = document.querySelector("#shipping").innerText

document.querySelector("#subtotal").innerText = redtotal1;

document.querySelector("#grandtotal").innerText =redtotal1+(+ship);