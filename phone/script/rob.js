var robData=[

{
    image_url: "https://img.gkbcdn.com/p/2020-08-03/Xiaomi-Redmi-9A-6-53--MTK-Helio-G25-Smartphone-4GB-64GB-Green-425885-0._w280_p1_.jpg",
    name: "Xiaomi Redmi 9A CN Version 4g LTE",
    price: "₹18000",
    strikedoffprice: "₹20000",
},
{
    image_url: "https://img.gkbcdn.com/p/2019-10-25/samsung-galaxy-s10-4g-6-1-inch-8gb-128gb-smartphone-black-1574132936482._w280_p1_.jpg",
    name: "Mi Virtual Wall for",
    price: "₹30099.94",
    strikedoffprice: "₹40728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-01-06/oneplus-9-cn-version-5g-smartphone-6-55-inch-8gb-128gb-black-3358a6-1641451666078._w280_p1_.jpg",
    name: "Apple IPhone Version 4g LTE",
    price: "₹10099",
    strikedoffprice: "₹12728",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-01-08/realme-q3-pro-cn-version-5g-6-43-inch-dimensity-1100-8gb-256gb-yellow-5d25ba-1641612211616._w280_p1_.jpg",
    name: "LCD Display Screen 3 Speed Modes Max ",
    price: "₹10997",
    strikedoffprice: "₹11728",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-02-26/xiaomi-redmi-k40-pro-cn-version-6-67-inches-8gb-128gb-blue-1614329511288._w280_p1_.jpg",
    name: " Cleaner Robot Virtual Wall for",
    price: "₹12099.94",
    strikedoffprice: "₹31728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-02-24/Global-Version-POCO-M3-Pro-497181-0._w280_.jpg",
    name: " Poco M3",
    price: "₹10099.94",
    strikedoffprice: "₹17280",
},


{
    image_url: "https://img.gkbcdn.com/p/2021-12-30/oneplus-9rt-cn-version-6-62-inch-12gb-256gb-blue-8c11d5-1640855806895._w280_p1_.jpg",
    name: "Oneplus",
    price: "₹45000",
    strikedoffprice: "₹55000",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-01-06/realme-gt-neo-2-cn-version-5g-6-62-inch-12gb-256gb-blue-65dbae-1641458107803._w280_p1_.jpg",
    name: "Realme",
    price: "₹36000",
    strikedoffprice: "₹40000",
},


{
    image_url: "https://img.gkbcdn.com/p/2020-08-03/Xiaomi-Redmi-9A-6-53--MTK-Helio-G25-Smartphone-4GB-64GB-Green-425885-0._w280_p1_.jpg",
    name: "Xiaomi Redmi 9A CN Version 4g LTE",
    price: "₹92900",
    strikedoffprice: "₹100235",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-01-06/realme-gt-neo-2t-cn-version-5g-6-43-inch-8gb-128gb-black-4f40bb-1641453348412._w280_p1_.jpg",
    name: "Mi Virtual Wall for",
    price: "₹30900",
    strikedoffprice: "₹40728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-12-30/oneplus-9rt-cn-version-6-62-inch-12gb-256gb-blue-8c11d5-1640855806895._w280_p1_.jpg",
    name: "CN Version 4g LTE",
    price: "₹10099.94",
    strikedoffprice: "₹13728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-01-08/realme-q3-pro-cn-version-5g-6-43-inch-dimensity-1100-8gb-256gb-yellow-5d25ba-1641612211616._w280_p1_.jpg",
    name: "LCD Display Screen 3 Speed Modes Max ",
    price: "₹12300",
    strikedoffprice: "₹17208.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-02-26/xiaomi-redmi-k40-pro-cn-version-6-67-inches-8gb-128gb-blue-1614329511288._w280_p1_.jpg",
    name: " Cleaner Robot Virtual Wall for",
    price: "₹12099.94",
    strikedoffprice: "₹31728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-02-24/Global-Version-POCO-M3-Pro-497181-0._w280_.jpg",
    name: " Poco M3",
    price: "₹10099.94",
    strikedoffprice: "₹17280",
},


{
    image_url: "https://img.gkbcdn.com/p/2021-12-30/oneplus-9rt-cn-version-6-62-inch-12gb-256gb-blue-8c11d5-1640855806895._w280_p1_.jpg",
    name: "redmi",
    price: "₹19099.94",
    strikedoffprice: "₹31728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-01-06/realme-gt-neo-2-cn-version-5g-6-62-inch-12gb-256gb-blue-65dbae-1641458107803._w280_p1_.jpg",
    name: "Vivo",
    price: "₹13099.94",
    strikedoffprice: "₹14728.92",
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

    let strikedoffprice=document.createElement("p")
    strikedoffprice.innerText=el.strikedoffprice
    strikedoffprice.style.textDecoration = "line-through";
    
    var btn = document.createElement("icon");
    btn.setAttribute("class","fas fa-heart");
    btn.setAttribute("id","wishheart");
    btn.style.color = "grey"
    btn.style.marginLeft="20px"
    // btn.innerText = "Add Card";
    // btn.style.textAlign="center"
    // btn.style.backgroundColor="teal"

    btn.addEventListener("click", function () {
        addToCart(el);
        if(btn.style.color = "grey" ){
            btn.style.color = "red";
            count.innerText = "1";
        }
        else if(btn.style.color = "grey"){
            count.innerText = "0";
        }
      });

    box.append(img, name, price,strikedoffprice,btn);

    document.querySelector("#image_section").append(box);


    

});
function addToCart(el) {
    console.log(el);
    robotData.push(el);
    localStorage.setItem("cart", JSON.stringify(robotData));
    // window.location.href="cart.html"
  }




