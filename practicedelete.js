async function del(arg) {
    await fetch(`http://localhost:4000/product/${arg}`,{
        method:"DELETE"
    })

    
}
async function kl() {
    let data=await fetch ('http://localhost:4000/product')
    let res=await data.json()

let x=document.querySelector("#output")
x.innerHTML=res.map(a=>`<div>${a.name}</div>
<div>${a.email}</div>
<div>${a.password}</div>
<div>${a.lastname}</div>
<button onclick="del('${a.id}')">remove</button> `).join(" ")
}
