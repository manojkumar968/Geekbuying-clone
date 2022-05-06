var robData=[

{
    image_url: "https://img.gkbcdn.com/p/2021-09-01/NAVEE--N65-10in-48V-500W-65KM-Mileage-Electric-Scooter-471545-3._w280_p1_.jpg",
    name: "NAVEE N65-Inch",
    price: "₹1099.94",
    dprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-09-02/kugoo-m4-pro-electric-scooter-500w-motor-48v-16ah-battery-55km-range-1630565928120._w280_p1_.jpg",
    name: "Mi Virtual Wall for",
    price: "₹3099.94",
    dprice: "₹4728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-12-24/Stunt-Scooter-with-Aluminium-Handlebar-Blue-484983-0._w280_p1_.jpg",
    name: "Cleaner E-Bike Virtual Wall for",
    price: "₹1099.94",
    dprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2019-09-24/kugoo-s1-pro-folding-electric-scooter-350w-motor-8-0-inch-tire-black-1574132525667._w280_p1_.jpg",
    name: "LCD Display Screen 3 Speed Modes Max ",
    price: "₹1200",
    dprice: "₹1500",
},
{
    image_url: "https://img.gkbcdn.com/p/2018-11-30/kugoo-s1-folding-electric-scooter-350w-motor-8-0-inch-tire-white-1574132515038._w280_p1_.jpg",
    name: " Cleaner Robot Virtual Wall for",
    price: "₹12099.94",
    dprice: "₹31728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2020-10-20/kugoo-es2-folding-electric-scooter-350w-motor-max-25km-h-black-1603195253830._w280_p1_.jpg",
    name: " Vacuum Cleaner Robot Virtual Wall for",
    price: "₹10099.94",
    dprice: "₹17280",
},


{
    image_url: "https://img.gkbcdn.com/p/2021-09-01/NAVEE--N65-10in-48V-500W-65KM-Mileage-Electric-Scooter-471545-3._w280_p1_.jpg",
    name: "NAVEE N65-Inch",
    price: "₹1099.94",
    dprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-09-02/kugoo-m4-pro-electric-scooter-500w-motor-48v-16ah-battery-55km-range-1630565928120._w280_p1_.jpg",
    name: "Mi Virtual Wall for",
    price: "₹3099.94",
    dprice: "₹4728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-12-24/Stunt-Scooter-with-Aluminium-Handlebar-Blue-484983-0._w280_p1_.jpg",
    name: "Cleaner E-Bike Virtual Wall for",
    price: "₹159",
    dprice: "₹1720",
},
{
    image_url: "https://img.gkbcdn.com/p/2019-09-24/kugoo-s1-pro-folding-electric-scooter-350w-motor-8-0-inch-tire-black-1574132525667._w280_p1_.jpg",
    name: "LCD Display Screen 3 Speed Modes Max ",
    price: "₹490",
    dprice: "₹1000",
},
{
    image_url: "https://img.gkbcdn.com/p/2018-11-30/kugoo-s1-folding-electric-scooter-350w-motor-8-0-inch-tire-white-1574132515038._w280_p1_.jpg",
    name: " Cleaner Robot Virtual Wall for",
    price: "₹12099.94",
    dprice: "₹31728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2020-10-20/kugoo-es2-folding-electric-scooter-350w-motor-max-25km-h-black-1603195253830._w280_p1_.jpg",
    name: " Vacuum Cleaner Robot Virtual Wall for",
    price: "₹10099.94",
    dprice: "₹17280",
},


];

let robotData= [];

robData.map(function (el) {

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




