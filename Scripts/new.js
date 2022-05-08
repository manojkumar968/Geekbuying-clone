// import { navbar } from "../components/navbar.js";
// let n=document.getElementById("navbar")
// n.innerHTML=navbar();

// document.querySelector("#tonavimg").addEventListener("click", homepageFun);

function home(){
    window.location.href = "index.html";
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }





$('.feat-btn').click(function(){
    $('nav ul .feat-show').toggleClass("show11");
     $('nav ul .first').toggleClass("rotate");
  });
  $('.serv-btn').click(function(){
    $('nav ul .serv-show').toggleClass("show1");
  //   $('nav ul .second').toggleClass("rotate");
  });
  $('.new-btn').click(function(){
      $('nav ul .new-show').toggleClass("show2");
    //   $('nav ul .second').toggleClass("rotate");
    });

    $('.cn-btn').click(function(){
      $('nav ul .cn-show').toggleClass("show3");
    //   $('nav ul .second').toggleClass("rotate");
    });



    var cartData = [
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: [
                "https://img.gkbcdn.com/p/2022-04-16/d1247addfb764aceaea6d5b062023e6a-499712-1._w500_p1_.jpg",
                "https://img.gkbcdn.com/p/2022-04-16/08705a53807842f1ab570eed83b0e083-499712-0._w500_p1_.jpg",
                "https://img.gkbcdn.com/p/2022-04-16/054d946ebe394c0faa281a4ee94e1e42-499712-2._w500_p1_.jpg",
                "https://img.gkbcdn.com/p/2020-10-14/tronsmart-element-mega-pro-60w-bluetooth-5-0-speaker-1602637498970._w500_p1_.jpg",
                "https://img.gkbcdn.com/p/2020-10-15/tronsmart-element-mega-pro-60w-bluetooth-5-0-speaker-1602747585439._w500_p1_.jpg",
                "https://img.gkbcdn.com/p/2020-10-15/tronsmart-element-mega-pro-60w-bluetooth-5-0-speaker-1602747582298._w500_p1_.jpg",
      
            ],
            name: "Tronsmart Force SE 50W Bluetooth 5.0 Speaker, IPX7 Waterproof, NFC,",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
            
        },
       
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: [
                
           "https://img.gkbcdn.com/p/2022-04-25/LED-Portable-Lightweight-Neck-Hung-Lamp-499964-0._w500_p1_.jpg",
           "https://img.gkbcdn.com/p/2022-04-25/LED-Portable-Lightweight-Neck-Hung-Lamp-499964-1._w500_p1_.jpg",
           "https://img.gkbcdn.com/p/2022-04-25/LED-Portable-Lightweight-Neck-Hung-Lamp-499964-2._w500_p1_.jpg",
            "https://img.gkbcdn.com/p/2022-04-25/LED-Portable-Lightweight-Neck-Hung-Lamp-499964-3._w500_p1_.jpg",
            "https://img.gkbcdn.com/p/2022-04-25/LED-Portable-Lightweight-Neck-Hung-Lamp-499964-1._w500_p1_.jpg",
            "https://img.gkbcdn.com/p/2022-04-25/LED-Portable-Lightweight-Neck-Hung-Lamp-499964-0._w500_p1_.jpg",
            
          
          ],
            name: "LED Portable Lightweight Neck Hung Lamp USB Charging with Eye Protection Design",
            price  : "₹1099.94",
            strikedoffprice:"₹2000.00",
        },
        {
          newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
          image_url: ["https://img.gkbcdn.com/p/2022-04-20/GF22-GPS-Tracker-499765-0._w500_p1_.jpg",
          "https://img.gkbcdn.com/p/2022-04-20/GF22-GPS-Tracker-499765-1._w500_p1_.jpg",
          "https://img.gkbcdn.com/p/2022-04-20/GF22-GPS-Tracker-499765-2._w500_p1_.jpg",
          "https://img.gkbcdn.com/p/2022-04-20/GF22-GPS-Tracker-499765-3._w500_p1_.jpg",
          "https://img.gkbcdn.com/p/2022-04-20/GF22-GPS-Tracker-499765-4._w500_p1_.jpg",
          "https://img.gkbcdn.com/p/2022-04-20/GF22-GPS-Tracker-499765-2._w500_p1_.jpg",
      ],
          name: "GF22 GPS Tracker Strong Magnetic Anti-Theft Tracker for Cars, Senior Citizen, Pets",
          price  : "₹1807.54",
          strikedoffprice:"₹1886.17 ",
      },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-20/Transparent-Handle-Case-for-GPD-Win-3-Handheld-Game-Console-499804-0._w280_p1_.jpg"],
            name: "Transparent Handle Case for GPD Win 3 Handheld Game Console",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-20/Storage-Bag-for-GPD-Win-3-Handheld-Game-Console-499803-0._w280_p1_.jpg"],
            name: "Storage Bag for GPD Win 3 Handheld Game Console",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-20/GF22-GPS-Tracker-499765-0._w280_p1_.jpg"],
            name: "GF22 GPS Tracker Strong Magnetic Anti-Theft Tracker for Cars, Senior Citizen, Pets",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-19/Creality-Ender-3-S1-S1-Pro-CV-Laser-Module-24V1-6W-499752-0._w280_p1_.jpg"],
            name: "QASIQ Self-Discipline Rotation Timer Magnetic LED Mute Timer Kitchen",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-14/kospet-tank-m1-smartwatch-black-aa9d87-1649902105873._w280_p1_.jpg"],
            name: "Creality Ender-3 S1/S1 Pro 24V 1.6W CV-Laser Module",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-20/Creality-Titanium-Alloy-Throat-Tube-499802-0._w280_p1_.jpg"],
            name: "Creality Titanium Alloy Throat Tube for Ender-3 S1/ Ender-3 S1 Pro/ CR-10 Smart",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-19/tronsmart-onyx-ace-pro-true-wireless-earbuds--white-878595-1650365396687._w280_p1_.jpg"],
            name: "Trianglelab Dragon Hotend V2.0 Super Precision 3D Printer Extrusion Head for V6",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-16/Trianglelab-Dragon-Hotend-V2-0-Super-Precision-499655-0._w280_p1_.jpg"],
            name: "Tronsmart Onyx Ace Pro True Wireless Earbuds TWS Earphone HD Call - White",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-28/XIAOMI-YOUPIN-JASE-PC-902-Dog-Hair-Clipper-Trimmer-500050-0._w280_p1_.jpg"],
            name: "Xiaomi Mijia Smart Mosquito Dispeller 2 USB/Battery Powered APP Remote Control",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-18/KUMI-X2-Pro-TWS-Bluetooth-5-1-Gaming-Earphone-Yellow-499740-0._w280_p1_.jpg"],
            name: "DOGNESS Cat Automatic LED Flash Rolling Ball Glowing Ball with Automatic",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-22/creality-heating-block-kit-high-temperature-pro-f665e1-1650623112203._w280_p1_.jpg"],
            name: "Creality Heating Block Kit-High Temperature Pro for Ender-3 S1/ Ender-3",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-22/creality-heating-block-kit-high-300-temperature-d1df0c-1650623080188._w280_p1_.jpg"],
            name: "Tronsmart Force SE 50W Bluetooth 5.0 Speaker, IPX7 Waterproof, NFC,",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-28/Zeblaze-Stratos-2-Smartwatch-1-3---AMOLED-Display-Blue-500033-0._w280_p1_.jpg"],
            name: "1.8L Pet Water Dispenser Filter Automatic Circulation with 2 Water Flow Modes and 6",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-25/A-pair-of-LED-Luminous-Chopsticks-499968-0._w280_p1_.jpg"],
            name: "XIAOMI YOUPIN JASE PC-902 Dog Hair Clipper Trimmer USB Charging Grooming",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url:[ "https://img.gkbcdn.com/p/2022-04-22/Trianglelab-Orbiter-Extruder-V2-0-LDO-Motor-499929-0._w280_p1_.jpg"],
            name: "Tronsmart Force SE 50W Bluetooth 5.0 Speaker, IPX7 Waterproof, NFC,",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-20/KUMI-GW3-Smartwatch-1-32---HD-Color-Screen-with-Bluetooth-Call-Silver-499791-0._w280_p1_.jpg"],
            name: "Creality Heating Block Kit-High 300 Temperature for Ender-3 S1/ Ender-3 S1",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-20/Xiaomi-Mijia-MJJMQ01-ZJ-Portable-Massage-Gun-499759-0._w280_p1_.jpg"],
            name: "KUMI X2 Pro TWS Bluetooth 5.1 Gaming Earphone with One Touch Key True",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-18/KUMI-GW16T-Pro-Smartwatch-1-3---Screen-Multiple-Sports-Modes-Black-499737-0._w280_p1_.jpg"],
            name: "Smart Bluetooth Sunglasses TWS Audio Eyewear Music & Hands Free Calling",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-16/Trianglelab-Rapido-Hotend-PT1000-499658-0._w280_p1_.jpg"],
            name: "Zeblaze Stratos 2 Smartwatch 1.3'' AMOLED Display 24 Health Monitor",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url:[ "https://img.gkbcdn.com/p/2022-04-20/1-8L-Pet-Water-Dispenser-Filter-499792-0._w280_p1_.jpg"],
            name: "A pair of LED Luminous Chopsticks Creative Tableware Glow Sticks for Party,",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-20/Baseus-PIR-Motion-Sensor-Night-Light-499757-0._w280_p1_.jpg"],
            name: "Trianglelab NEW LDO Orbiter Extruder V2.0 LDO MOTOR Compatible PLA PEI",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-29/Smart-Bluetooth-Sunglasses-TWS-Audio-Eyewear-Sunglasses-Gold-500084-0._w280_p1_.jpg"],
            name: "KUMI GW3 Smartwatch for Men 1.32'' HD Color Screen with Bluetooth Call Heart",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-29/XIAOMI-YOUPIN-JASE-PC-620-2-in-1-7W-Pet-Electric-Nail-Polisher-500064-0._w280_p1_.jpg"],
            name: "Xiaomi Mijia MJJMQ01-ZJ Portable Massage Gun Muscle Relax Electric",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-26/Dogness-USB-Charging-Pet-Paws-Washer-Cup-499987-0._w280_p1_.jpg"],
            name: "KUMI GW16T Pro Smartwatch 1.3'' Touch Screen Multiple Sports Modes Heart Health",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-21/ALLDOCUBE-iWork-GT-2-in-1-Tablet-Windows-11-i5-1135G7-CPU-499845-0._w280_p1_.jpg"],
            name: "ALLDOCUBE iWork GT 2 in 1 Tablet Windows 11 i5-1135G7 CPU, 8GB",
            price  : "₹69187.45",
            strikedoffprice:"",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-29/5050RGB-LED-Car-Underfoot-Atmosphere-Light-Belt-500066-0._w280_p1_.jpg"],
            name: "5050RGB LED Car Underfoot Atmosphere Light Belt with Wireless Bluetooth Music",
            price  : "₹1493.05",
            strikedoffprice:"",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-28/XIAOMI-YOUPIN-JASE-PC-980-Dog-Hair-Clipper-Trimmer-500052-0._w280_p1_.jpg"],
            name: "XIAOMI YOUPIN JASEPC-980 Dog Hair Clipper Trimmer USB Charging Grooming",
            price  : "₹4716.59",
            strikedoffprice:"₹5660.07 ",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-26/DOGNESS-Cat-Automatic-LED-Flash-Rolling-Ball-499986-0._w280_p1_.jpg"],
            name: "DOGNESS Cat Automatic LED Flash Rolling Ball Glowing Ball with Automatic",
            price  : "₹1335.80",
            strikedoffprice:"₹1571.67",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-20/Xiaomi-4-In-1-Flower-Plant-Light-Temperature-Tester-499796-0._w280_p1_.jpg"],
            name: "Xiaomi 4 In 1 Flower Plant Light Temperature Tester Garden Soil Moisture",
            price  : "₹2357.90",
            strikedoffprice:"",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-20/Automatic-Loop-BPA-free-Pet-Water-Fountain-499795-0._w280_p1_.jpg"],
            name: "2.6L Automatic Loop BPA-free Pet Water Fountain Large Capacity Silent Non-toxic",
            price  : "₹2829.64",
            strikedoffprice:"₹3458.63",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url:[ "https://img.gkbcdn.com/p/2022-04-20/Floppy-Fish-Cat-Toy-499763-0._w280_p1_.jpg"],
            name: "Floppy Fish Cat Toy 11' Interactive Catnip Toys Washable Simulation Moving Fish for",
            price  : "₹706.82",
            strikedoffprice:"",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url:[ "https://img.gkbcdn.com/p/2022-04-18/KUMI-K3-Smartwatch-for-Women-1-09---HD--Color-Screen-Gold-499730-0._w280_p1_.jpg"],
            name: "KUMI K3 Smartwatch for Women 1.09'' HD Color Screen Sleep Analysis Multi-motion",
            price  : "₹4166.23",
            strikedoffprice:"",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-14/T-bao-MN32-AMD-R3-3200U-Windows-10-Mini-PC-8-128GB-499613-0._w280_p1_.jpg"],
            name: "T-bao MN32 AMD R3 3200U 2 Cores 4 Threads 8GB RAM 128GB ROM Windows",
            price  : "₹29011.10",
            strikedoffprice:"",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url:[ "https://img.gkbcdn.com/p/2022-04-14/WLtoys-A170-RC-Plane-Toy-EPO-Outdoor-with-3-Batteries-White---Blue-499601-0._w280_p1_.jpg"],
            name: "Wltoys A170 RC Plane EPO Remote Control Aircraft Outdoor Toy - 3 Batteries",
            price  : "₹15723.81",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-14/Multi-Function-Kitchen-Dicing-and-Slicing-Slicer-Shredder-Set-15-pcs-499592-0._w280_p1_.jpg"],
            name: "Multi-Function Kitchen Dicing and Slicing Slicer Shredder Set 15 pcs",
            price  : "₹2908.26",
            strikedoffprice:"",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-29/XIAOMI-YOUPIN-JASE-PC-500-Pet-Electric-Nail-Polisher-500062-0._w280_p1_.jpg"],
            name: "XIAOMI YOUPIN JASE PC-500 Pet Electric Nail Polisher USB Charging Nail",
            price  : "₹1964.79",
            strikedoffprice:"₹2043.41 ",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-20/Household-Mosquito-Lamp-Suction-Electric-Trap-Mosquito-Repellent-499760-0._w280_p1_.jpg"],
            name: "Household Mosquito Suction Electric Trap Indoor Mosquito Repellent",
            price  : "₹1728.92",
            strikedoffprice:"₹2043.41 ",
        },
        {
          newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
          image_url: [
                   "https://img.gkbcdn.com/p/2022-04-16/tronsmart--trip-ebbc53-1650097286486._w280_p1_.jpg",
                   ],
          name: "Tronsmart Trip 10W Portable Bluetooth 5.3 Speaker, IPX7 Waterproof - Gray",
          price  : "₹1571.67",
          strikedoffprice:"₹2357.90 ",
      },
      ]
      


var wishData = JSON.parse(localStorage.getItem("wish"))|| [];


cartData.map(function(el){

  var div = document.createElement("div");

  var Newimg = document.createElement("img");
  Newimg.src = el.newimg;
  Newimg.setAttribute("class","newimgg");

  var image = document.createElement("img");
  image.src = el.image_url[0];
  image.setAttribute("id","imgbody")
  image.addEventListener("click",function(){
      imageclick(el);
  })

  var note = document.createElement("p");
  note.innerText = el.name;

  var price1 = document.createElement("h3");
  price1.innerText = el.price;

  var strike = document.createElement("p");
  strike.innerText = el.strikedoffprice;
  strike.style.textDecoration="line-through";
  strike.style.color = "grey";
  strike.setAttribute("class","strike")

  var div2 = document.createElement("div");
  div2.setAttribute("id","div2")
  var btn = document.createElement("icon");
  btn.setAttribute("class","fas fa-heart");
  btn.setAttribute("id","wishheart");
  btn.style.color = "grey"
  btn.addEventListener("click",function(){
      btnwish(el);
          if(btn.style.color = "grey" ){
              btn.style.color = "red";
              count.innerText = "1";
          }
          else if(btn.style.color = "grey"){
              count.innerText = "0";
          }
  })
  var count = document.createElement("p");
  count.innerText = "0";
  count.setAttribute("id","counter");

   div2.append(btn,count);

  var free = document.createElement("p");
  free.innerText = "Free Shipping";
  free.style.color = "grey";
  free.setAttribute("id","free");

 

  div.append(Newimg ,image,note,price1,strike,div2,free);

  document.querySelector("#filter22").append(div);
});

function imageclick(el){
    var newData =  [];
  alert("Item Successfully Added To Your Cart")
  newData.push(el);
  localStorage.setItem("cart",JSON.stringify(newData))
}

function  btnwish(el){
 
        wishData.push(el);
        console.log(wishData)
        localStorage.setItem("wish",JSON.stringify(wishData));
}


cartData.map(function(el){
  var div = document.createElement("div");
  div.setAttribute("class"," mySlides")

  var image1 = document.createElement("img");
  image1.src = el.image_url[0];
  image1.setAttribute("id","image1")
  

  var note1 = document.createElement("p");
  note1.innerText = el.name;

  var div3 = document.createElement("div");
  div3.setAttribute("id","div3")

  var price2 = document.createElement("h3");
  price2.innerText = el.price;

  var strike1 = document.createElement("p");
  strike1.innerText = el.strikedoffprice;
  strike1.style.textDecoration="line-through";
  strike1.style.color = "grey";

   div3.append(price2,strike1)
  div.append(image1,note1,div3);

  document.querySelector("#slideshow-container11").append(div);
});
