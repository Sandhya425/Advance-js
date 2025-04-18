function open1(){
    alert()
    let s=document.querySelector("#addform")
    s.style.display="block"
}
function f(){
    let cname=document.querySelector('#cname').value
    let cprice=document.querySelector('#cprice').value
    let tname=document.querySelector('#tname').value
    let cduration=document.querySelector('#cduration').value
    let cdiscount=document.querySelector('#cdiscount').value

    let obj={
       "cname":cname,
       "cprice":cprice,
       "tname":tname,
       "cduration":cduration,
       "cdiscount":cdiscount
    }
    fetch('http://localhost:4000/course',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })
}