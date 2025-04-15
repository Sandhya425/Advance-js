async function ssr() {
    let productname=document.querySelector("#name").value
    let productbrand=document.querySelector("#brand").value
    let productprice=document.querySelector("#price").value
    
    let obj={
        "productname": productname,
        "productbrand":productbrand,
        "productprice": productprice,
        // "image" :image
    }
   let b=await fetch('http://localhost:4000/product',{
    method:"POST",
    headers:{
        "content-type":"application/json",
    },
    body:JSON.stringify(obj)
   })
   console.log(a)
}