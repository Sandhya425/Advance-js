// async function sr() {
//     let a=await fetch('http://localhost:4000/register')
//     let b=await a.json()
//     console.log(b)
// }



//post
async function rj() {
    let name=document.querySelector("#name").value
    let email=document.querySelector("#email").value
   let ob ={
    "name":name,
    "email":email
   }
   let a=await fetch ('http://localhost:4000/register',{
    method:"POST",
    headers:{
        "content-type":"application/json",
    },
    body:JSON.stringify(ob)
   })
  console.log(a)
}
//delete
async function kl() {
    let data=await fetch('http://localhost:4000/register')
    let re=await data.json();

    let h=document.querySelector("#output")
    h.innerHTML=re.map(e=>`<div>${e.name}</div
     <div>${e.email}</div 
     <button onclock="  `)
}
>