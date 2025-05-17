
const text=document.getElementById("text")
const text1=document.getElementById("text1")
const brand=document.getElementById("brand")
const price=document.getElementById("price")
const category=document.getElementById("category")
const date=document.getElementById("date")
const available=document.getElementById("available")
const quantity=document.getElementById("quantity")

const button=document.getElementById('btn')
button.addEventListener('click',message)
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
    name :text.value,
    desc: text1.value,
    brand: brand.value,
    price: price.value,
    category: category.value,
    date: date.value,
    available: available.value,
    quantity:quantity.value
})
})
.then(res=>res.json())
.then(datas=>{
  console.log(datas)
})
.catch(err=>console.log(err))
console.log("hello")

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
