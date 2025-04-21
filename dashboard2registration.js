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
    // window.location.href="./dashboard2.html"
}