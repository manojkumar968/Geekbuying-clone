var printerData=[

{
    image_url: "https://img.gkbcdn.com/p/2022-04-24/artillery-sidewinder-x2-3d-printer-3b98f7-1650788405823._w280_.png",
    name: "Artillery Sidewinder X2 3D Printer",
    price: "₹11099.94",
    strikedoffprice: "₹12728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-09-17/Anycubic-Vyper-3D-Printer-472768-0._w280_p1_.jpg",
    name: "Creality Ender-3 S1 Pro 3D Printer ",
    price: "₹3099.94",
    strikedoffprice: "₹4728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-10-11/Anycubic-Wash-and-Cure-2-0-Machine-473349-0._w280_p1_.jpg",
   
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-09-16/Artillery-Genius-Pro-3D-Printer-472514-0._w280_p1_.jpg",
    name: "Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹10099.94",
    strikedoffprice: "₹16728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-07-12/Artillery-Hornet-2021-Newest-Model-3D-Printer-with-Metal-Integrated-St-461282-0._w280_p1_.jpg",
    name: "Proscenic 850T Printer Cleaner 3000Pa Suction Three  ",
    price: "₹12099.94",
    strikedoffprice: "₹31728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-12-20/Makibes-3D-Printer-1Kg-PLA-Black-481859-1._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹10099.94",
    strikedoffprice: "₹17280",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-10-11/Anycubic-Wash-and-Cure-2-0-Machine-473349-0._w280_p1_.jpg",
    name: " Vacuum Cleaner Robot Virtual Wall for",
    price: "₹2099.94",
    strikedoffprice: "₹7728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-01-22/ELEGOO-Mars-2-Pro-MSLA-Resin-3D-Printer-494877-0._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-09-17/Anycubic-Vyper-3D-Printer-472768-0._w280_p1_.jpg",
    name: "Printer Virtual Wall for",
    price: "₹3099.94",
    strikedoffprice: "₹5728.92",
},

{
    image_url: "https://img.gkbcdn.com/p/2021-09-16/Artillery-Genius-Pro-3D-Printer-472514-0._w280_p1_.jpg",
    name: "Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹10099.94",
    strikedoffprice: "₹16728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-07-12/Artillery-Hornet-2021-Newest-Model-3D-Printer-with-Metal-Integrated-St-461282-0._w280_p1_.jpg",
    name: "Proscenic 850T Printer Cleaner 3000Pa Suction Three  ",
    price: "₹12099.94",
    strikedoffprice: "₹31728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-12-20/Makibes-3D-Printer-1Kg-PLA-Black-481859-1._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹10400",
    strikedoffprice: "₹15000",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-10-11/Anycubic-Wash-and-Cure-2-0-Machine-473349-0._w280_p1_.jpg",
    name: " Vacuum Cleaner Robot Virtual Wall for",
    price: "₹20000",
    strikedoffprice: "₹23489",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-01-22/ELEGOO-Mars-2-Pro-MSLA-Resin-3D-Printer-494877-0._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹10005",
    strikedoffprice: "₹14007",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-09-17/Anycubic-Vyper-3D-Printer-472768-0._w280_p1_.jpg",
    name: "Printer Virtual Wall for",
    price: "₹30000",
    strikedoffprice: "₹57000",
},





];

let robotData=[];

printerData.map(function (el) {

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
    
    btn.innerHTML='<i  style="font-size:25px;color:grey;background-color:white;border:none"  class="far fa-heart "></i>';
btn.style.marginLeft="20px"

    btn.addEventListener("click", function () {
        addToCart(el);
      });

    box.append(img, name, price,strikedoffprice,btn);

    document.querySelector("#image_section").append(box);


    

});
function addToCart(el) {
    console.log(el);
    robotData.push(el);
    localStorage.setItem("cart", JSON.stringify(robotData));
    window.location.href="cart.html"
  }




