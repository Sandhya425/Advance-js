async function sr() {
    let obj={
            "productname": "Aqua",
            "productbrand":"aqualogic",
            "productprice":67
    }
    let o=await fetch('http://localhost:4000/product',{
       method:"POST",
       headers:{
        "content-type":"application/JSON",
       },
       body:JSON.stringify(obj)
    })
    console.log(o)
}