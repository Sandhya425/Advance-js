// async function sr() {
//     let a=await fetch('http://localhost:4000/register')
//     let b=await a.json()
//     console.log(b)
// }



//post
// async function rj() {
//     let name=document.querySelector("#name").value
//     let email=document.querySelector("#email").value
//    let ob ={
//     "name":name,
//     "email":email
//    }
//    let a=await fetch ('http://localhost:4000/register',{
//     method:"POST",
//     headers:{
//         "content-type":"application/json",
//     },
//     body:JSON.stringify(ob)
//    })
//   console.log(a)
// }



//delete
// async function del(arg){
//     await fetch (`http://localhost:4000/register/${arg}`,{
//         method:"DELETE"
//     })
// }
// async function kl(){
//     let a=await fetch('http://localhost:4000/register')
//     let y=await a.json()

//     let c=document.querySelector("#output")
//     c.innerHTML=y.map(e=>`
//        <div>${e.name}</div>
//        <div>${e.email}</div>
//        <button onclick="del('${e.id}')">remove</button> `)
// }


//update

async function final(id) {
   let name=document.querySelector("#name").value 
   let email=document.querySelector("#email").value
   let obj={
    "name":name,
    "email":email
   }
fetch (`http://localhost:4000/register/${id}`,{
    method:"PUT",
    headers:{
       "content-type":"application/json"
    },
    body:JSON.stringify(obj)
})

}
async function up(id){
let x=await fetch (`http://localhost:4000/register/${id}`)
    let y=await x.json()
    let f=`<form><input type="text" placeholder="enter"id="name"value="${y.name}"
    <input type="text" placeholder="enter"id="email"value="${y.email}"
    <button onclick="final('${id}')">update</button>
    </form>`
    let h=document.querySelector("#form")
    h.innerHTML=f
}
async function kl(){
    let x=await fetch('http://localhost:4000/register')
    let y=await x.json()

    let a=document.querySelector("#output")
    a.innerHTML=y.map(a=>`
       <div>${a.name}</div>
       <div>${a.email}</div>
<button onclick="up('${a.id}')">update</button> `)
}