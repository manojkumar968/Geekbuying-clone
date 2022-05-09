
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



//   function home(){
//     window.location.href="index.html"
// }
// onclick="logFun()"
// function logFun(){
//     window.location.href="SignIn.html"
// }




// let gE = (sel) => {
//   return document.querySelector(sel)
// }

// let dayarr = [5];
// let hrarr = [0];
// let minarr = [23];
// let secarr = [24];

// let timer = () => {

//   let id = setInterval(() => {
//       secarr[0] -= 1;

//       secarr[0]=secarr[0]-1;
//       // console.log(sec)

//       if (secarr[0] == 0) {
//           if (minarr[0] >= 1) {
//               minarr[0] -= 1;
//               secarr[0] = 59;
//           }

//       }

//       if (minarr[0] == 0) {
//           if (hrarr[0] >= 1) {
//               hrarr[0] -= 1;
//               minarr[0] = 59;
//           }


//       }
//       if (hrarr[0] == 0) {
//           if (dayarr[0] >= 1) {
//               dayarr[0] -= 1;
//               hrarr[0] = 23;
//           }

//       }

//       if (dayarr[0] == 0 && hrarr[0] == 0 && minarr[0] == 0 && secarr[0] == 0) {
//           clearInterval(id)
//       }

//       let day = dayarr[0];

//       let hr;
//       if (hrarr[0] < 10) {
//           hr = '0' + hrarr[0]
//       }
//       else {
//           hr = hrarr[0]
//       }

//       let min;
//       if (minarr[0] < 10) {
//           min = '0' + minarr[0]
//       }
//       else {
//           min = minarr[0]
//       }


//       let sec;
//       if (secarr[0] < 10) {
//           sec = '0' + secarr[0]
//       }
//       else {
//           sec = secarr[0]
//       }
//       // console.log(sec)

//       let days = gE('.dayCount')
//       days.innerHTML = day;

//       let hour = gE('.hourCount')
//       hour.innerHTML = hr;

//       let mintue = gE('.mintueCount')
//       mintue.innerHTML = min;

//       let second = gE('.secondCount')
//       second.innerHTML = sec;



//       // console.log('day:', day, 'hr:', hr, 'min:', min, 'sec:', sec)


//   }, 1000)


// }

// timer()







const API="DebNRmfqSjTAyhg0cBDBDb3HuwkUm8tcASfIMkW9OUg"

// import { navbar } from "../components/navbar.js";

import { navbar } from "../components/navbar.js";
let n=document.getElementById("navbar")
n.innerHTML=navbar();

import {searchImage,append} from"./fetch.js";



let search=(e)=>{
    if(e.key==="Enter"){
        let value=document.getElementById("query").value;
        searchImage(API,value).then((data) =>{
            console.log(data)
            let printdata =document.getElementById("printdata");
            append(data.results,printdata);
        });
    }
};


document.getElementById("query").addEventListener("keydown",search);




// let totalItemInWishFun=()=>{
//   let totalItemInWish=document.querySelector('.totalItemInWish')

//   let wishItem=JSON.parse(localStorage.getItem('wish'))

//   totalItemInWish.innerHTML=wishItem.length;

//   totalItemInWish.style.backgroundColor='yellow'

//   totalItemInWish.style.color='red'

//   totalItemInWish.style.fontWeight='bold'
  


// }

// totalItemInWishFun();



// let totalItemInCartFun=()=>{
//   let totalItemIncart=document.querySelector('.totalItemInCart')

//   let cartItem=JSON.parse(localStorage.getItem('cartData'))

//   console.log(cartItem)
//   totalItemIncart.innerHTML=cartItem.length;

//   totalItemIncart.style.backgroundColor='yellow'

//   totalItemIncart.style.color='red'

//   totalItemIncart.style.fontWeight='bold'
  


// }

// totalItemInCartFun();


