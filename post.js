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


    //delete
async function del(arg){
    await fetch(`http://localhost:4000/product/${arg}`,{
      method:"DELETE"
    })
}

async function f() {
    let data=await fetch('http://localhost:4000/product');
    let res=await data.json();
    

    let o=document.querySelector('#output')
    o.innerHTML=res.map(e=>`<div>${e.name}</div>
<div>${e.email}</div>
<div>${e.number}</div>
<div>${e.address}</div>
<div>${e.password}</div>
<button onclick="del('${e.id}')"> remove</button>`).join(" ")
}
    
