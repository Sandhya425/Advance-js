async function sr(){
    let a=await fetch('http://localhost:4000/product')
    let b=await a.json()
    console.log(b)
}