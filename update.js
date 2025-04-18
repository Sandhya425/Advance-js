function final (id){
    // alert()
    let name=document.querySelector("#name").value
    let email=document.querySelector("#email").value
    let number=document.querySelector("#number").value
    let address=document.querySelector("#address").value
    let password=document.querySelector("#password").value

    let obj={
        "name":name,
        "email":email,
        "number":number,
        "address":address,
        "password":password
    }
    fetch(`http://localhost:4000/product/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(obj)
    });
}

async function up(id) {
    let update=await fetch(`http://localhost:4000/product/${id}`)
    let res=await update.json()
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
    let update= await fetch('http://localhost:4000/product')
    let res=await update.json();

    let o=document.querySelector("#output")
    o.innerHTML=res.map(e=>`<div>${e.name}</div>
<div>${e.email}</div>
<div>${e.number}</div>
<div>${e.address}</div>
<div>${e.password}</div>
 <button onclick="del('${e.id}')">remove</button>
<button onclick="up('${e.id}')">update</button>`).join(" ")
}