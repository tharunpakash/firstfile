// let a=33;
// const age=90;
//  let=a+33;
//  age+3;
// console.log(let)
// console.log(age)
// 
const button=document.getElementById('btn')
button .addEventListener('click',message)
   function message(){
      fetch('http://localhost:8080/api/products')
.then(res=>res.json())
.then(datas=>{
const fetch= document.getElementById('fetch')
datas.forEach(data=>{
  const tr=document.createElement('tr')
  tr.innerHTML+=
  `<tr id="row-${data.id}">
  <td>${data.id}</td>
  <td>${data.name}</td
    td>${data.desc}</tr>
  <td>${data.brand}</td>
  <td>${data.price}</td>
  <td>${data.category}</td>
  <td>${data.date}</td>
  <td>${data.available}</td>
  <td>${data.quantity}</td>
 <td><button onclick="deleteproduct(${data.id})">Delete</button></td>
  </tr>`
  fetch.appendChild(tr)
})
})  
}

const updatebtn=document.getElementById('update')
.addEventListener('click',postrequest);
  function postrequest(){
fetch("http://localhost:8080/api/product",{
method:"POST",
headers:{
  "Content-Type":"application/json"
},
body:JSON.stringify({
  
    name: "Bugatti",
    desc: "A stylish SUV with advanced features and comfortable interior.",
    brand: "Bugatti Horse",
    price: 950000,
    category: "Cars",
    date: 3-11-2024,
    available: true,
    quantity: 70
})
})
.then(res=>res.json())
.then(datas=>{
  console.log(datas)
})
.catch(err=>console.log(err))
}
function deleteproduct(productId){
  fetch("http://localhost:8080/api/product`${productId}`",{
    method:"DELETE",
    }
  ).then(res=>{
    if(res.ok){
      alert(`" Product ${productId}deleted sucessfully"`)
      const row=document.getElementById(`row-${productId}`)
      if(row){
      row.remove();
    }
  }
    else{
      alert(`" product ${productId} not deleted"`)
    }
  })
  .catch(err=>console.log(err))
}

