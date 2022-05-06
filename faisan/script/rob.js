var robData=[

{
    image_url: "https://img.gkbcdn.com/p/2017-10-19/lkn18krgpn1211-b-christmas-necklace-1572248476900._w280_p1_.jpg",
    name: "Charm Chain Pendant Jewelry Gift -Silver ",
    price: "₹1699.94",
    dprice: "₹2728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2018-04-05/ball-earrings-1571986586610._w280_p1_.jpg",
    name: "Sterling Silver Plated Necklace ",
    price: "₹31099.94",
    dprice: "₹41728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2018-04-05/alloy-crystal-decoration-clip-on-earrings-1571986218926._w280_p1_.jpg",
    name: "Mesh Heart Pendant - Silver ",
    price: "₹50199.94",
    dprice: "₹61728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2017-10-17/inalis-christmas-necklace-charm-chain-platinum-1572249735407._w280_p1_.jpg",
    name: "LKN18KRGPN1211-B Christmas Necklace Charm ",
    price: "₹1099.94",
    dprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2018-04-05/neoglory-green-crystal-decorated-ring-1571986379054._w280_p1_.jpg",
    name: "Ring  Christmas Necklace Charm",
    price: "₹12099.94",
    dprice: "₹31728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-02-08/Black-Square-Purse-439284-0._w280_p1_.jpg",
    name: "Silver",
    price: "₹10099.94",
    dprice: "₹17280",
},


{
    image_url: "https://img.gkbcdn.com/p/2022-04-07/Men-s-White-Tie-Vest-and-Bow-Tie-Set-Medium-499195-0._w280_p1_.jpg",
    name: "Gold",
    price: "₹1099.94",
    dprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2019-12-24/6809a-women-wrist-watch-1577181212897._w280_p1_.jpg",
    name: "Charistmas",
    price: "₹3099.94",
    dprice: "₹4728.92",
},


{
    image_url: "https://img.gkbcdn.com/p/2020-04-14/unisex-anti-saliva-round-protection-riding-fisherman-hat-black-1586835948769._w280_p1_.jpg",
    name: "Xiaomi Redmi 9A CN Version 4g LTE",
    price: "₹1099.94",
    dprice: "₹1728.92",
},

{
    image_url: "https://img.gkbcdn.com/p/2017-10-19/lkn18krgpn1211-b-christmas-necklace-1572248476900._w280_p1_.jpg",
    name: "Charm Chain Pendant Jewelry Gift -Silver ",
    price: "₹1699.94",
    dprice: "₹2728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2018-04-05/ball-earrings-1571986586610._w280_p1_.jpg",
    name: "Sterling Silver Plated Necklace ",
    price: "₹31099.94",
    dprice: "₹41728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2018-04-05/alloy-crystal-decoration-clip-on-earrings-1571986218926._w280_p1_.jpg",
    name: "Mesh Heart Pendant - Silver ",
    price: "₹50199.94",
    dprice: "₹61728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2017-10-17/inalis-christmas-necklace-charm-chain-platinum-1572249735407._w280_p1_.jpg",
    name: "LKN18KRGPN1211-B Christmas Necklace Charm ",
    price: "₹1099.94",
    dprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2018-04-05/neoglory-green-crystal-decorated-ring-1571986379054._w280_p1_.jpg",
    name: "Ring  Christmas Necklace Charm",
    price: "₹12099.94",
    dprice: "₹31728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-02-08/Black-Square-Purse-439284-0._w280_p1_.jpg",
    name: "Silver",
    price: "₹10099.94",
    dprice: "₹17280",
},


{
    image_url: "https://img.gkbcdn.com/p/2022-04-07/Men-s-White-Tie-Vest-and-Bow-Tie-Set-Medium-499195-0._w280_p1_.jpg",
    name: "Gold",
    price: "₹1099.94",
    dprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2019-12-24/6809a-women-wrist-watch-1577181212897._w280_p1_.jpg",
    name: "Charistmas",
    price: "₹3099.94",
    dprice: "₹4728.92",
},


{
    image_url: "https://img.gkbcdn.com/p/2020-04-14/unisex-anti-saliva-round-protection-riding-fisherman-hat-black-1586835948769._w280_p1_.jpg",
    name: "Xiaomi Redmi 9A CN Version 4g LTE",
    price: "₹1099.94",
    dprice: "₹1728.92",
},


];

let robotData= [];

robData.map(function (el) {

    console.log(robData)
    var box=document.createElement("div")

    let img =document.createElement("img")
    img.src=el.image_url


    let name=document.createElement("p")
    name.textContent=el.name


    let price=document.createElement("h4")
price.innerText=el.price;

    let dprice=document.createElement("p")
    dprice.innerText=el.dprice
    dprice.style.textDecoration = "line-through";
    
    var btn = document.createElement("icon");
    
    btn.innerHTML='<i  style="font-size:25px;color:grey;background-color:white;border:none"  class="far fa-heart "></i>';
btn.style.marginLeft="20px"

    btn.addEventListener("click", function () {
        addToCart(el);
      });

    box.append(img, name, price,dprice,btn);

    document.querySelector("#image_section").append(box);


    

});
function addToCart(el) {
    console.log(el);
    robotData.push(el);
    localStorage.setItem("robot", JSON.stringify(robotData));
    window.location.href="scooter.html"
  }




