$('.feat-btn').click(function(){
    $('nav ul .feat-show').toggleClass("show");
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
      
      image_url: "https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991584812._w280_p1_.jpg",
      name: "Tronsmart Element Mega SoundPulse™ Bluetooth 5.0 Speaker with Powerful 40W",
      price  : "₹3458.63",
      strikedoffprice:"₹5266.95 ",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
      
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-force-portable-bluetooth-speaker-1571993707403._w280_p1_.jpg",
      name: "Tronsmart Force SoundPulse™ 40W Bluetooth 5.0 Speaker IPX7 Water",
      price  : "₹4480.72",
      strikedoffprice:"₹5502.82 ",
      ratings: "⭐️⭐️⭐️⭐️⭐️", 
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2019-03-18/tronsmart-element-t6-plus-bluetooth-speaker-black-1574132869322._w280_p1_.jpg",
      name: "Tronsmart Element T6 Plus Portable Bluetooth 5.0 Speaker with 40W Max",
      price  : "₹4716.59",
      strikedoffprice:"₹6289.05 ",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2017-07-26/xiaomi-wifi-amplifier-pro-black-1574132393616._w280_p1_.jpg",
      name: "Xiaomi WiFi Amplifier Pro 2X2 External Antenna 300Mbps Support 64 Devices",
      price  : "",
      strikedoffprice:"₹2122.03",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2019-08-27/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588089._w280_p1_.jpg",
      name: "Tronsmart T2 Plus 20W Bluetooth 5.0 Speaker 24H Playtime NFC IPX7",
      price  : "₹2593.77",
      strikedoffprice:"₹3301.38 ",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2019-03-16/tronsmart-force-mega-t6-t6-plus-speaker-carry-case-1571991604256._w280_p1_.jpg",
      name: "Tronsmart Force/Mega/T6/T6 Plus/T6 Plus Upgraded Carrying Case Portable Travel",
      price  : "₹942.69",
      strikedoffprice:"₹1000.00",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2019-11-15/mifo-o7-bluetooth-5-0-tws-qualcomm-qcc3020-earphones-black-1574132882676._w280_p1_.jpg",
      name: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
      price  : "₹7861.51",
      strikedoffprice:"₹12578.89",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_p1_.jpg",
      name: "Apods i500 Bluetooth 5.0 Pop-up Window TWS Earbuds Independent Usage",
      price  : "₹1178.56",
      strikedoffprice:"₹1964.79",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2017-10-21/c120-6-axis-gyro-2-4g-mini-air-mouse-1571989094158._w280_p1_.jpg",
      name: "C120 English Version 6-Axis Gyro 2.4G Mini Wireless Air Mouse QWERTY",
      price  : "₹706.82",
      strikedoffprice:"₹785.44 ",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-02-10/a6r-tws-wireless-earphones-black-4570b2-1644488631155._w280_p1_.jpg",
      name: "A6R TWS Bluetooth V5.0 Button Control IPX4 Waterproof 3h Playtime Wireless in-",
      price  : "₹675.37",
      strikedoffprice:"₹1178.56",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2019-07-02/tronsmart-element-force-portable-bluetooth-speaker---carrying-case-1571993695019._w280_p1_.jpg",
      name: "Bundle Tronsmart Force SoundPulse™ 40W Bluetooth 5.0 Speaker IPX7 Water",
      price  : "₹4716.59",
      strikedoffprice:"₹5974.56",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2021-11-09/63in1-Screwdriver-Set-Gray-477863-0._w280_p1_.jpg",
      name: "63 In 1 Screwdriver Set Precision Magnetic Screw Driver Bits Torx Hex Bit Handle",
      price  : "₹1021.31",
      strikedoffprice:"₹1571.67 ",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2017-08-11/xiaomi-yeelight-motion-sensor-night-light-white-1571990951696._w280_p1_.jpg",
      name: "Xiaomi Yeelight YLYD01YL LED Sensor Night Light Body Motion IR Sensor",
      price  : "₹1493.05",
      strikedoffprice:"₹2357.90 ",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2019-10-11/jjrc-x12-4k-gps-rc-drone-white-two-batteries-with-bag-1574132236117._w280_p1_.jpg",
      name: "JJRC X12 AURORA 4K 5G WIFI 3KM FPV GPS Foldable RC Drone With 3Axis",
      price  : "₹17296.27",
      strikedoffprice:"₹25944.80 ",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2020-04-03/ENCHEN-Multi-purpose-Electric-Hair-Clipper-Trimmer-Black-901271-._w280_p1_.jpg",
      name: "ENCHEN Multi-purpose Electric Hair Clipper Trimmer Two Speed Ceramic Cut",
      price  : "₹1335.80",
      strikedoffprice:"₹1493.05",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2017-11-02/h18-backlight-full-touchpad-wireless-keyboard-1571977302944._w280_p1_.jpg",
      name: "H18+ Backlight Full Touchpad Mini Wireless Keyboard 2.4GHz Air Mouse for",
      price  : "₹1728.92",
      strikedoffprice:"₹1886.17 ",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2019-09-27/tronsmart-element-t6-mini-bluetooth-5-0-speaker---black-1571994046957._w280_p1_.jpg",
      name: "Tronsmart Element T6 Mini 15W Bluetooth 5.0 Speaker 30m Connection Siri Google",
      price  : "₹2751.02",
      strikedoffprice:"₹3500.20",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2019-09-23/e6s-bluetooth5-0-tws-earphones-power-display-1574132636939._w280_p1_.jpg",
      name: "E6S Bluetooth 5.0 TWS Earphones Siri LED Power Display Binaural Call",
      price  : "₹698.17",
      strikedoffprice:"₹942.69 ",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-20/KUMI-GW3-Smartwatch-1-32---HD-Color-Screen-with-Bluetooth-Call-Silver-499791-0._w280_p1_.jpg",
      name: "Creality Heating Block Kit-High 300 Temperature for Ender-3 S1/ Ender-3 S1",
      price  : "₹6289.05",
      strikedoffprice:"₹7861.51",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-20/Xiaomi-Mijia-MJJMQ01-ZJ-Portable-Massage-Gun-499759-0._w280_p1_.jpg",
      name: "KUMI X2 Pro TWS Bluetooth 5.1 Gaming Earphone with One Touch Key True",
      price  : "₹6289.05",
      strikedoffprice:"₹7861.51",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-18/KUMI-GW16T-Pro-Smartwatch-1-3---Screen-Multiple-Sports-Modes-Black-499737-0._w280_p1_.jpg",
      name: "Smart Bluetooth Sunglasses TWS Audio Eyewear Music & Hands Free Calling",
      price  : "₹6289.05",
      strikedoffprice:"₹7861.51",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-16/Trianglelab-Rapido-Hotend-PT1000-499658-0._w280_p1_.jpg",
      name: "Zeblaze Stratos 2 Smartwatch 1.3'' AMOLED Display 24 Health Monitor",
      price  : "₹6289.05",
      strikedoffprice:"₹7861.51",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-20/1-8L-Pet-Water-Dispenser-Filter-499792-0._w280_p1_.jpg",
      name: "A pair of LED Luminous Chopsticks Creative Tableware Glow Sticks for Party,",
      price  : "₹6289.05",
      strikedoffprice:"₹7861.51",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-20/Baseus-PIR-Motion-Sensor-Night-Light-499757-0._w280_p1_.jpg",
      name: "Trianglelab NEW LDO Orbiter Extruder V2.0 LDO MOTOR Compatible PLA PEI",
      price  : "₹6289.05",
      strikedoffprice:"₹7861.51",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-29/Smart-Bluetooth-Sunglasses-TWS-Audio-Eyewear-Sunglasses-Gold-500084-0._w280_p1_.jpg",
      name: "KUMI GW3 Smartwatch for Men 1.32'' HD Color Screen with Bluetooth Call Heart",
      price  : "₹6289.05",
      strikedoffprice:"₹7861.51",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-29/XIAOMI-YOUPIN-JASE-PC-620-2-in-1-7W-Pet-Electric-Nail-Polisher-500064-0._w280_p1_.jpg",
      name: "Xiaomi Mijia MJJMQ01-ZJ Portable Massage Gun Muscle Relax Electric",
      price  : "₹6289.05",
      strikedoffprice:"₹7861.51",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-26/Dogness-USB-Charging-Pet-Paws-Washer-Cup-499987-0._w280_p1_.jpg",
      name: "KUMI GW16T Pro Smartwatch 1.3'' Touch Screen Multiple Sports Modes Heart Health",
      price  : "₹6289.05",
      strikedoffprice:"₹7861.51",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-21/ALLDOCUBE-iWork-GT-2-in-1-Tablet-Windows-11-i5-1135G7-CPU-499845-0._w280_p1_.jpg",
      name: "ALLDOCUBE iWork GT 2 in 1 Tablet Windows 11 i5-1135G7 CPU, 8GB",
      price  : "₹69187.45",
      strikedoffprice:"",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-29/5050RGB-LED-Car-Underfoot-Atmosphere-Light-Belt-500066-0._w280_p1_.jpg",
      name: "5050RGB LED Car Underfoot Atmosphere Light Belt with Wireless Bluetooth Music",
      price  : "₹1493.05",
      strikedoffprice:"",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-28/XIAOMI-YOUPIN-JASE-PC-980-Dog-Hair-Clipper-Trimmer-500052-0._w280_p1_.jpg",
      name: "XIAOMI YOUPIN JASEPC-980 Dog Hair Clipper Trimmer USB Charging Grooming",
      price  : "₹4716.59",
      strikedoffprice:"₹5660.07 ",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-26/DOGNESS-Cat-Automatic-LED-Flash-Rolling-Ball-499986-0._w280_p1_.jpg",
      name: "DOGNESS Cat Automatic LED Flash Rolling Ball Glowing Ball with Automatic",
      price  : "₹1335.80",
      strikedoffprice:"₹1571.67",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-20/Xiaomi-4-In-1-Flower-Plant-Light-Temperature-Tester-499796-0._w280_p1_.jpg",
      name: "Xiaomi 4 In 1 Flower Plant Light Temperature Tester Garden Soil Moisture",
      price  : "₹2357.90",
      strikedoffprice:"",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-20/Automatic-Loop-BPA-free-Pet-Water-Fountain-499795-0._w280_p1_.jpg",
      name: "2.6L Automatic Loop BPA-free Pet Water Fountain Large Capacity Silent Non-toxic",
      price  : "₹2829.64",
      strikedoffprice:"₹3458.63",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-20/Floppy-Fish-Cat-Toy-499763-0._w280_p1_.jpg",
      name: "Floppy Fish Cat Toy 11' Interactive Catnip Toys Washable Simulation Moving Fish for",
      price  : "₹706.82",
      strikedoffprice:"",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-18/KUMI-K3-Smartwatch-for-Women-1-09---HD--Color-Screen-Gold-499730-0._w280_p1_.jpg",
      name: "KUMI K3 Smartwatch for Women 1.09'' HD Color Screen Sleep Analysis Multi-motion",
      price  : "₹4166.23",
      strikedoffprice:"",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-14/T-bao-MN32-AMD-R3-3200U-Windows-10-Mini-PC-8-128GB-499613-0._w280_p1_.jpg",
      name: "T-bao MN32 AMD R3 3200U 2 Cores 4 Threads 8GB RAM 128GB ROM Windows",
      price  : "₹29011.10",
      strikedoffprice:"",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-14/WLtoys-A170-RC-Plane-Toy-EPO-Outdoor-with-3-Batteries-White---Blue-499601-0._w280_p1_.jpg",
      name: "Wltoys A170 RC Plane EPO Remote Control Aircraft Outdoor Toy - 3 Batteries",
      price  : "₹15723.81",
      strikedoffprice:"₹7861.51",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-14/Multi-Function-Kitchen-Dicing-and-Slicing-Slicer-Shredder-Set-15-pcs-499592-0._w280_p1_.jpg",
      name: "Multi-Function Kitchen Dicing and Slicing Slicer Shredder Set 15 pcs",
      price  : "₹2908.26",
      strikedoffprice:"",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-29/XIAOMI-YOUPIN-JASE-PC-500-Pet-Electric-Nail-Polisher-500062-0._w280_p1_.jpg",
      name: "XIAOMI YOUPIN JASE PC-500 Pet Electric Nail Polisher USB Charging Nail",
      price  : "₹1964.79",
      strikedoffprice:"₹2043.41 ",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
      
      image_url: "https://img.gkbcdn.com/p/2022-04-20/Household-Mosquito-Lamp-Suction-Electric-Trap-Mosquito-Repellent-499760-0._w280_p1_.jpg",
      name: "Household Mosquito Suction Electric Trap Indoor Mosquito Repellent",
      price  : "₹1728.92",
      strikedoffprice:"₹2043.41 ",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
  },
 
]


var wishData = JSON.parse(localStorage.getItem("wish"))|| [];


cartData.map(function(el){

  var div = document.createElement("div");

  

  var image = document.createElement("img");
  image.src = el.image_url;
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

  var star = document.createElement("p");
  star.innerText = el.ratings;
  star.setAttribute("id", "star")

 

  div.append(image,note,price1,strike,star,div2,free);

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
  image1.src = el.image_url;
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

  document.querySelector("#slideshow-container").append(div);
});
