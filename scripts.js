

const btn=document.getElementById("btn1")
const fetch=document.getElementById("fetch")

btn.addEventListener("click",message)
function message(e){
    e.preventDefault();
    let tr=document.createElement("tr")

tr.innerHTML+=`<td>${text.value}</td><td>${text1.value}</td>
<td>${brand.value}</td><td>${price.value}</td><td>${category.value}</td>
<td>${date.value}</td><td>${available.value}</td><td>${quantity.value}</td>
<td><button onclick="deleteBtn(event)">delete</button></td>` 
fetch.appendChild(tr)
    }
deleteBtn=(e)=>{
    e.target.closest("tr").remove();
}
   