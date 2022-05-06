var robData=[

{
    image_url: "https://img.gkbcdn.com/p/2022-03-02/creality-ender-3-s1-pro-3d-printer-c9e30b-1646215071933._w280_p1_.jpg",
    name: "Sculpfun S9 5.5W Laser Engraver",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-04-24/artillery-sidewinder-x2-3d-printer-3b98f7-1650788405823._w280_.png",
    name: "Artillery Sidewinder",
    price: "₹3099.94",
    strikedoffprice: "₹4728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-03-30/76-in-1-Precision-Telecommunication-Tool-Set-498505-0._w280_p1_.jpg",
    name: "Cleaner Robot Virtual Wall for",
    price: "₹1400",
    strikedoffprice: "₹1728",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-03-02/creality-ender-3-s1-pro-3d-printer-c9e30b-1646215071933._w280_p1_.jpg",
    name: "Cleaner Robot Virtual Wall for",
    price: "₹2000",
    strikedoffprice: "₹2500",
},
{
    image_url: "https://img.gkbcdn.com/p/2019-11-16/i100000-pro1-bluetooth-5-0-tws-earphones-used-independently-1574132876970._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹12099.94",
    strikedoffprice: "₹31728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-02-22/proscenic-ultenic-t10-smart-vacuum-cleaner---dust-collector-black-dc2cfd-1645511708385._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹10099.94",
    strikedoffprice: "₹17280",
},
{
    image_url: "https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991584812._w280_p1_.jpg",
    name: " Vacuum Cleaner Robot Virtual Wall for",
    price: "₹2099.94",
    strikedoffprice: "₹7728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2020-11-18/proscenic-m7-pro-robot-vacuum-cleaner-black-1605689442227._w280_p1_.jpg",
    name: "Vacuum Cleaner Robot Virtual Wall for",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-11-09/63in1-Screwdriver-Set-Gray-477863-0._w280_p1_.jpg",
    name: "MiCleaner Robot Virtual Wall for",
    price: "₹3099.94",
    strikedoffprice: "₹5728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-03-02/creality-ender-3-s1-pro-3d-printer-c9e30b-1646215071933._w280_p1_.jpg",
    name: "Sculpfun S9 5.5W Laser Engraver",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-04-24/artillery-sidewinder-x2-3d-printer-3b98f7-1650788405823._w280_.png",
    name: "Artillery Sidewinder",
    price: "₹3099.94",
    strikedoffprice: "₹4728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-03-30/76-in-1-Precision-Telecommunication-Tool-Set-498505-0._w280_p1_.jpg",
    name: "Cleaner Robot Virtual Wall for",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2020-03-23/roborock-s5-max-robot-vacuum-cleaner-international-version-white-1584951748299._w280_p1_.jpg",
    name: "Cleaner Robot Virtual Wall for",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2019-11-16/i100000-pro1-bluetooth-5-0-tws-earphones-used-independently-1574132876970._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹12099.94",
    strikedoffprice: "₹31728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-02-22/proscenic-ultenic-t10-smart-vacuum-cleaner---dust-collector-black-dc2cfd-1645511708385._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹10099.94",
    strikedoffprice: "₹17280",
},
{
    image_url: "https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991584812._w280_p1_.jpg",
    name: " Vacuum Cleaner Robot Virtual Wall for",
    price: "₹2099.94",
    strikedoffprice: "₹7728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-07-07/Tronsmart-T6-Pro-45W-Bluetooth-5-0-Speaker-with-LED-Light-461146-0._w280_p1_.jpg",
    name: "Vacuum Cleaner Robot Virtual Wall for",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_p1_.jpg",
    name: "MiCleaner Robot Virtual Wall for",
    price: "₹3099.94",
    strikedoffprice: "₹5728.92",
},



];

let robotData=[];

robData.map(function (el) {

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




