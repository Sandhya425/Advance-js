async function rl() {
    let yourname=document.querySelector("#name").value
    let youremail=document.querySelector("#email").value
    let yournumber=document.querySelector("#number").value
    let youraddress=document.querySelector("#address").value
    let yourpassword=document.querySelector("#password").value

    let obj={
        "name":yourname,
        "email":youremail,
        "number":yournumber,
        "address":youraddress,
        "password":yourpassword
    }
    let k=await fetch('http://localhost:4000/product',{
     method:"POST",
     headers:{
        "content-type":"application/json",
     },
     body:JSON.stringify(obj)
    })
    console.log(k)
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

//update
function final (id){
    alert()
    let yourname=document.querySelector("#name").value
    let youremail=document.querySelector("#email").value
    let yournumber=document.querySelector("#number").value
    let youraddress=document.querySelector("#address").value
    let yourpassword=document.querySelector("#password").value

    let obj={
        "name":yourname,
        "email":youremail,
        "number":yournumber,
        "address":youraddress,
        "password":yourpassword
    }
    fetch(`http://localhost:4000/product/${id}`,{
        method:"PUT",
        headres:{
            "content-type":"application/json",
        },
        body:JSON.stringify(obj)
    })
}
async function up(id) {
    let data=await fetch(`http://localhost:4000/product/${id}`)
    let res=await data.json()
      let ui=`<form>
      <input type="text" id="name" value="${res.name}">
      <input type="text" id="email" value="${res.email}">
      <input type="text" id="number" value="${res.number}">
      <input type="text" id="address" value="${res.address}">
      <input type="text" id="password" value="${res.password}">
      <button onclick="final('${id}')">update</button>
      </form>`
      let fo=document.querySelector('#form')
      fo.innerHTML=ui
}
async function f(){
    let data= await fetch('http://localhost:4000/product')
    let res=await data.json();

    let o=document.querySelector("#output")
    o.innerHTML=res.map(e=>`<div>${e.name}</div>
<div>${e.email}</div>
<div>${e.number}</div>
<div>${e.address}</div>
<div>${e.password}</div>
<button onclick="del('${e.id}')">remove</button>
<button onclick="up('${e.id}')">update</button>`).join(" ")
}