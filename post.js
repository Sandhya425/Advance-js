async function df() {
    let obj={
        "productname": "Aqua",
            "productbrand":"aqualogic",
            "productprice": 400 
    }
    let a=await fetch("http://localhost:4000/product",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(obj)
            
        })
       // Window.alert
        // let b=await a.json()//read
        console.log(b)
    }
    
