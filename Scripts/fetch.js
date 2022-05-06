
let searchImage= async (API,value)=>{
    try{
        let res=await fetch(`https://api.unsplash.com/search/photos?query=${value}&per_page=20&client_id=${API}`);

        let data= await res.json();
        // console.log(data)
        return data;
    }
    catch(err){
        console.log(err);
    }
    
};

let append=(data,printdata)=>{
    data.forEach(({alt_description,urls:{small}})=>{

        let div=document.createElement("div");
        div.setAttribute("class","image")

        let img=document.createElement("img");

        let h3=document.createElement("p");

        let price=document.createElement("p")
        price.innerText=`Price:  ${45000}`

        let btn=document.createElement("button")
        btn.innerText="BUY"
        btn.setAttribute("id","buybtn")

        img.src=small;
        h3.innerText=alt_description;
        div.append(img,h3,price,btn)

        printdata.append(div);
        

    })
}


export{searchImage,append}; 







// let searchImage=async(API,value)=>{
//     try{
//         let res=await fetch(`https://api.unsplash.com/search/photos?query=${value}&per_page=20&client_id=${API}`);
//         let data=await res.json();
//         console.log(data)
//         return data;

//     }catch(err){
//         console.log(err);
//     }

// }





// export{searchImage,append};