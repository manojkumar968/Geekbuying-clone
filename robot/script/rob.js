var robData=[

{
    image_url: "https://img.gkbcdn.com/p/2022-03-14/Roborock-Q7-Max-Robot-Vacuum-Cleaner-497778-0._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2020-11-28/proscenic-850t-smart-robot-cleaner-3000pa-suction-black-1606556043479._w280_p1_.jpg",
    name: "Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹3099.94",
    strikedoffprice: "₹4728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2021-08-25/XIAOMI-MIJIA-Robot-Vacuum-Cleaner-471269-0._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2020-11-28/proscenic-850t-smart-robot-cleaner-3000pa-suction-black-1606556043479._w280_p1_.jpg",
    name: "Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-03-18/Xiaomi-Smartmi-Robot-Vacuum-Cleaner-497932-0._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹12099.94",
    strikedoffprice: "₹31728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-03-18/Xiaomi-Viomi-Alpha-3-AI-Robot-Vacuum-Cleaner-497931-0._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹10099.94",
    strikedoffprice: "₹17280",
},
{
    image_url: "https://img.gkbcdn.com/p/2020-04-27/Chinese-Version-Xiaomi-Mijia-G1-Robot-Vacuum-Cleaner-White-903162-._w280_p1_.jpg",
    name: " Vacuum Cleaner Robot Virtual Wall for",
    price: "₹2099.94",
    strikedoffprice: "₹7728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2020-04-08/360-S6-Automatic-Robotic-Vacuum-Cleaner-Black-764314-._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2016-09-14/xiaomi-mi-robot-virtual-wall-1571987041125._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹3099.94",
    strikedoffprice: "₹5728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2020-11-28/proscenic-850t-smart-robot-cleaner-3000pa-suction-black-1606556043479._w280_p1_.jpg",
    name: "Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹3099.94",
    strikedoffprice: "₹4728.92",
},
{
    image_url: "https://img.gkbcdn.com/s3/l/label/Label28.png?20220427",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2020-11-28/proscenic-850t-smart-robot-cleaner-3000pa-suction-black-1606556043479._w280_p1_.jpg",
    name: "Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2022-04-06/Xiaomi-Mijia-5200mAh-Battery-Robot-Vacuum-Cleaner-499080-0._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹12099.94",
    strikedoffprice: "₹31728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2020-11-09/Xiaomi-Mijia-1T-Robot-Vacuum-Cleaner-3000pa-Suction-Black-426704-0._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹10099.94",
    strikedoffprice: "₹17280",
},
{
    image_url: "https://img.gkbcdn.com/p/2020-04-27/Chinese-Version-Xiaomi-Mijia-G1-Robot-Vacuum-Cleaner-White-903162-._w280_p1_.jpg",
    name: " Vacuum Cleaner Robot Virtual Wall for",
    price: "₹2099.94",
    strikedoffprice: "₹7728.92",
},
{
    image_url: "https://img.gkbcdn.com/p/2020-04-08/360-S6-Automatic-Robotic-Vacuum-Cleaner-Black-764314-._w280_p1_.jpg",
    name: "Xiaomi Mi Robot Vacuum Cleaner Robot Virtual Wall for",
    price: "₹1099.94",
    strikedoffprice: "₹1728.92",
},



];

// let robotData=JSON.parse(localStorage.getItem("robot")) || [];

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
    let arr=[]
    console.log('el',el);
    // robotData.push(el);
    arr.push(el)
    localStorage.setItem("cart", JSON.stringify(arr));
    // window.location.href="cart.html"
  }




// sliding img-------
