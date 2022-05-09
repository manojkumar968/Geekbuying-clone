// var cartData = [
//     {
//     qty: 3,
//     price: 603.00,
//     discount: "",
//     productname: "Waterproof Handlebar Bag Folding Storage Pack for Electric Scooter Bicycle",
//     producturl: "https://img.gkbcdn.com/p/2019-06-14/scooter-front-tube-bag-tools-storage-for-xiaomi-mijia-m365-black-1574132871919._w280_.jpg",
//     strickedoff:"" },
//     {
//     price:782.00,
//     qty:2,
//     discount: "",
//     productname: "Stunt Scooter with Aluminium Handlebar with disc brakes Black",
//     producturl: "https://img.gkbcdn.com/p/2021-08-26/janobike-t10-folding-electric-scooter-23ah-1000w-x2-motor-black-1629949298856._w280_.jpg",
//     strickedoff:"" },
//     {
//     price: "1373",
//     qty:4,
//     discount: "",
//     productname: "Portable Quick-drying  Superfine Fiber With Silicone Sleeve For Travel Outdoor-Gray",
//     producturl: "https://img.gkbcdn.com/p/2020-05-07/30-x-100cm-Portable-Quick-drying-Cooling-Towel-Gray-903740-._w280_.jpg",
//     strickedoff:"",}
//     ];

// localStorage.setItem("cartData",JSON.stringify(cartData));

var data = JSON.parse(localStorage.getItem("cartData"));

// console.log(data);

var quantity = data.length;

document.querySelector("#total-items").innerText = quantity;

// creating a div to append 

var redtotal = data.reduce(function(sum,elem){
    return sum + elem.qty*elem.price;
    
},0)
// console.log(redtotal);

data.map(function(elem,index){

    var price = elem.qty*elem.price;

    console.log(elem,index)

    let mid3div = document.createElement("div");
    mid3div.setAttribute("id","mid3div");

    let prodimg = document.createElement("img");
    prodimg.src = elem.producturl;
    prodimg.setAttribute("id","prodimg");

    let proddesc = document.createElement("p");
    proddesc.innerText = elem.productname;
    proddesc.setAttribute("id","proddesc");

    let prodprice = document.createElement("p");
    prodprice.innerText = elem.price;
    prodprice.setAttribute("id","prodprice");

    let qtydiv = document.createElement("div");
    qtydiv.setAttribute("id","qtydiv")

    let qtydiv1 = document.createElement("div");
    qtydiv1.setAttribute("id","qtydiv1")
    qtydiv1.innerText ="-";



    qtydiv1.onclick = function(){
        event.preventDefault();

        if(Number(qtydiv2.innerText)>1)
        {
            qtydiv2.innerText=Number(qtydiv2.innerText)-1;
            price2.innerText=Number(prodprice.innerText)*Number(qtydiv2.innerText)
            totalPrice.innerHTML=Number(totalPrice.innerHTML)-Number(elem.price)
            // let changeTotalPrice=
            // console.log(totalPrice )
            // console.log(elem.price)
        }
      
    }


    var qty = elem.qty;
    let qtydiv2 = document.createElement("div");
    qtydiv2.setAttribute("id","qtydiv2")
    qtydiv2.innerText = elem.qty;

    let qtydiv3 = document.createElement("div");
    qtydiv3.setAttribute("id","qtydiv3")
    qtydiv3.innerText ="+";


    qtydiv3.onclick = function(){
        event.preventDefault();
        qtydiv2.innerText=Number(qtydiv2.innerText)+1;
        price2.innerText=Number(prodprice.innerText)*Number(qtydiv2.innerText)
        totalPrice.innerHTML=Number(totalPrice.innerHTML)+Number(elem.price)

    }


    qtydiv.append(qtydiv1,qtydiv2,qtydiv3)

    let price2 = document.createElement("p");
    price2.innerText = price;
    price2.setAttribute("id","price2");
    

    let operation = document.createElement("div");
    operation.setAttribute("id","operation")
    
    let wish = document.createElement("p");
    wish.innerText = "Wishlist";
    wish.setAttribute("id","wish");
    wish.onclick = () => {
        window.location.href="";
    }

    let del = document.createElement("p");
    del.innerText = "Delete";
    del.setAttribute("id","del");
    del.addEventListener("click",function(){
        removeitem(elem,index);
    })

    operation.append(wish,del);

    mid3div.append(prodimg,proddesc,prodprice,qtydiv,price2,operation);
    
    document.querySelector("#mid3").append(mid3div);

    let totalPrice=document.querySelector("#total-price")
    totalPrice.innerText = redtotal;
});

function removeitem(elem,index)
{
    data.splice(index,1);
    localStorage.setItem("cartData",JSON.stringify(data));
    window.location.reload();
}



function ptoc(){
    if(quantity>0)
    {
        window.location.href = "checkoutconfirmation.html";
    }
    else{
        alert("Cart is Empty!")
    }
    
}



































// Carousal js part----------------------------------

var inputdata = [
    {
        price: "₹603.00",
        discount: "",
        productname: "Waterproof Handlebar Bag Folding Storage Pack for Electric Scooter Bicycle",
        producturl: "https://img.gkbcdn.com/p/2019-06-14/scooter-front-tube-bag-tools-storage-for-xiaomi-mijia-m365-black-1574132871919._w280_.jpg",
        strickedoff:""  },
    {
        price: "₹1373.00 ",
        discount: "",
        productname: "Portable Quick-drying  Superfine Fiber With Silicone Sleeve For Travel Outdoor-Gray",
        producturl: "https://img.gkbcdn.com/p/2020-05-07/30-x-100cm-Portable-Quick-drying-Cooling-Towel-Gray-903740-._w280_.jpg",
        strickedoff:"",
    },
    {
        price: "₹603.00",
        discount: "",
        productname: "Waterproof Handlebar Bag Folding Storage Pack for Electric Scooter Bicycle",
        producturl: "https://img.gkbcdn.com/p/2019-04-28/handlebar-bag-folding-storage-pack-for-electric-scooter-bicycle-1571993646741._w280_.jpg",
        strickedoff:""   },
    {
        price: "₹405.00",
        discount: "",
        productname: "NAVEE N65 10-Inch Folding Electric Scooter 500W Motor 25km/h - Black",
        producturl: "https://img.gkbcdn.com/p/2021-09-29/KugooKirin-S4-10inches-electric-scooter-Black-472898-0._w280_.jpg",
        strickedoff:""   },
    {
        price: "₹405.00 ",
        discount: "",
        productname: "HappyRun HR365 MAX Folding Electric Scooter 10 inch - Black",
        producturl: "https://img.gkbcdn.com/p/2021-09-01/NAVEE--N65-10in-48V-500W-65KM-Mileage-Electric-Scooter-471545-3._w280_.jpg",
        strickedoff:""   },
    {
        price: "₹782.00 ",
        discount: "",
        productname: "Stunt Scooter with Aluminium Handlebar with disc brakes Black",
        producturl: "https://img.gkbcdn.com/p/2021-08-26/janobike-t10-folding-electric-scooter-23ah-1000w-x2-motor-black-1629949298856._w280_.jpg",
        strickedoff:""   },
    {
        price: "₹781.00 ",
        discount: "",
        productname: "Duro Flexi Scooter with adjustable height and seating position for comforting back",
        producturl: "https://img.gkbcdn.com/p/2022-05-05/Mankeel-MK011-Folding-E-bike-with-Dual-Disc-Brakes-500244-0._w280_.jpg",
        strickedoff:""   },
    {
        price: "₹782.00 ",
        discount: "",
        productname: "NAVEE N65 10-Inch Folding Electric Scooter 500W Motor 25km/h - Black",
        producturl: "https://img.gkbcdn.com/p/2021-12-27/kugookirin-g3-electric-scooter-1200w-motor-52v-18ah-battery-217364-1640589906322._w280_.jpg",
        strickedoff:""   },
   
    
]

//                        


function print(inputdata) {


    var div_productDetailMainBox = document.querySelector('.productDetailMainBox')
    div_productDetailMainBox.innerText = '';

    inputdata.map(function (e) {

        //                        product image hove sale tag create and ancher tag created start


        var div_productDetailMainBox = document.querySelector('.productDetailMainBox')
        div_productDetailMainBox.setAttribute('id', 'productDetailMainBox')

        var div_image_productdetail = document.createElement('div')
        div_image_productdetail.setAttribute('class', 'div_image_productdetail')

        div_productDetailMainBox.append(div_image_productdetail)

        var div_productImgHoverSale = document.createElement('div')
        div_productImgHoverSale.setAttribute('class', 'productImgHoverSale')

        div_image_productdetail.append(div_productImgHoverSale)

        var a_underlineRemove = document.createElement('a')
        a_underlineRemove.setAttribute('class', 'underlineRemove')

        div_productImgHoverSale.append(a_underlineRemove)

        var div_imgHoverSale = document.createElement('div')
        div_imgHoverSale.setAttribute('id', 'imgHoverSale')

        a_underlineRemove.append(div_imgHoverSale)

        var img_productImg = document.createElement('img')
        img_productImg.setAttribute('class', 'productImg')
        img_productImg.src = e.producturl

        div_imgHoverSale.append(img_productImg);

        var div_hoverSaleDiv = document.createElement('div')
        div_hoverSaleDiv.setAttribute('class', 'hoverSaleDiv')

        div_imgHoverSale.append(div_hoverSaleDiv)

        var div_parntOfHover_area = document.createElement('div')
        div_parntOfHover_area.setAttribute('class', 'parntOfHover area')

        div_hoverSaleDiv.append(div_parntOfHover_area)

        var div_hide = document.createElement('div')
        div_hide.setAttribute('class', 'hide')

        div_parntOfHover_area.append(div_hide)

        var i_fa_solid_fa_eye = document.createElement('i')
        i_fa_solid_fa_eye.setAttribute('class', 'fa-solid fa-eye')

        div_hide.append(i_fa_solid_fa_eye)

        var div_parntOfSale_area = document.createElement('div')
        div_parntOfSale_area.setAttribute('class', 'parntOfSale area')
        var div_saleDiv = document.createElement('div')
        div_saleDiv.setAttribute('id', 'saleDiv')
        var p_sale = document.createElement('p')
        p_sale.setAttribute('class', 'pSale')
        p_sale.innerText = e.discount;

        div_saleDiv.append(p_sale)

        div_parntOfSale_area.append(div_saleDiv)

        div_hoverSaleDiv.append(div_parntOfSale_area)



        //                                    product image hove sale tag create and ancher tag created end



        //                                  product detail like name price start

        var div_productDetail = document.createElement('div')
        div_productDetail.setAttribute('class', 'productDetail')

        div_image_productdetail.append(div_productDetail)

        var div_productName = document.createElement('div')
        div_productName.setAttribute('class', 'productName')

        div_productDetail.append(div_productName)

        var p_product_name = document.createElement('p')
        p_product_name.innerText = e.productname;

        div_productName.append(p_product_name)

        var div_starRating = document.createElement('div')
        div_starRating.setAttribute('class', 'starRating')

        div_productDetail.append(div_starRating)

        var span1_fa_fa_star_checked = document.createElement('span')
        span1_fa_fa_star_checked.setAttribute('class', 'fa fa-star checked')

        // div_starRating.append(span1_fa_fa_star_checked)

        var span2_fa_fa_star_checked = document.createElement('span')
        span2_fa_fa_star_checked.setAttribute('class', 'fa fa-star checked')

        // div_starRating.append(span2_fa_fa_star_checked)

        var span3_fa_fa_star_checked = document.createElement('span')
        span3_fa_fa_star_checked.setAttribute('class', 'fa fa-star checked')

        // div_starRating.append(span3_fa_fa_star_checked)

        var span4_fa_fa_star = document.createElement('span')
        span4_fa_fa_star.setAttribute('class', 'fa fa-star')

        // div_starRating.append(span4_fa_fa_star)

        var span5_fa_fa_star = document.createElement('span')
        span5_fa_fa_star.setAttribute('class', 'fa fa-star')

        // div_starRating.append(span5_fa_fa_star)

        var div_price = document.createElement('div')
        div_price.setAttribute('class', 'price')

        div_productDetail.append(div_price)

        var div_offprice = document.createElement('div')
        div_offprice.setAttribute('class', 'offprice')

        div_price.append(div_offprice)

        var s_for_offprice = document.createElement('s')
        s_for_offprice.innerText = e.strickedoff;

        div_offprice.append(s_for_offprice)

        var div_currentprice = document.createElement('div')
        div_currentprice.setAttribute('class', 'currentprice')
        div_currentprice.innerText = e.price;

        div_price.append(div_currentprice)

        var div_discount = document.createElement('div')
        div_discount.setAttribute('class', 'discount')
        div_discount.innerText = e.discount;

        div_price.append(div_discount)

        







                                        
    })
}




// print(inputdata);
// console.log(print)





let arr=inputdata

let lef=0;
let rig=3;

totalData=arr.slice(lef,rig+1)

print(totalData)


//                                         forward function
let forward=()=>{
    lef+=1;
    rig+=1;

    console.log(lef,rig)

    if(lef>=arr.length){
        lef=lef-arr.length;
    }

    if(rig>=arr.length){
        rig=rig-arr.length;
    }
    console.log(lef,rig)


    let lefData;
    let rigData;
    let totalData;

    if(lef>rig){
        // console.log('in',lef,arr.length)
        lefData=arr.slice(lef,arr.length)
        rigData=arr.slice(0,rig+1)
        // console.log(lefData,rigData)
        totalData=[...lefData,...rigData]
        // console.log(totalData)
    }
    else{
        // console.log('else',lef,rig)
        totalData=arr.slice(lef,rig+1)
        // console.log(totalData)
    }


    //                                           cell to function Print Data
    print(totalData)
    // console.log(totalData)


}





//                                                    backward function



let backward=()=>{

    console.log(lef,rig)
    lef-=1;
    rig-=1;

    console.log(lef,rig)


    if(lef<0){
        lef=arr.length+lef
    }

    if(rig<0){
        rig=arr.length+rig;
    }
     
    console.log(lef,rig)




    let lefData;
    let rigData;
    let totalData;

    if(lef>rig){
        // console.log('in',lef,arr.length)
        lefData=arr.slice(lef,arr.length)
        rigData=arr.slice(0,rig+1)
        // console.log(lefData,rigData)
        totalData=[...lefData,...rigData]
        // console.log(totalData)
    }
    else{
        // console.log('else',lef,rig)
        totalData=arr.slice(lef,rig+1)
        // console.log(totalData)
    }

    //                                            cell to print Data

    print(totalData)



}