/* ============ PRODUCT DATABASE ============ */
const products = [
  {id:1,name:"Vintage Denim Jacket",price:45,img:"genz look jacket.jpeg"},
  {id:2,name:"Leather Bomber Jacket",price:60,img:"bomber jacket.jpeg"},
  {id:3,name:"Retro Graphic Tee",price:25,img:"graphic t-shirt.jpeg"},
  {id:4,name:"Vintage High Waist Jeans",price:40,img:"vintage geans.jpeg"},
  {id:5,name:"Oversized Hoodie",price:35,img:"oversized hoodie.jpeg"},
  {id:6,name:"Vintage Leather Bag",price:55,img:"leather bag.jpeg"},
  {id:7,name:"Retro Sneakers",price:50,img:"retro sneakers.jpeg"},
  {id:8,name:"Aesthetic Skirt",price:30,img:"vintage skirt.jpeg"},
  {id:9,name:"Thrift Beanie",price:15,img:"vintage beanie.jpeg"},
  {id:10,name:"Vintage Sunglasses",price:20,img:"aesthetic sunglasses.jpeg"}
];

/* LOAD PRODUCTS */
const box=document.getElementById("productBox");
function loadProducts(list){
  box.innerHTML="";
  list.forEach(p=>{
    box.innerHTML+=`
      <div class="product-card" onclick="openProduct(${p.id})">
         <img src="${p.img}">
         <h3>${p.name}</h3>
         <p class="price">$${p.price}</p>
         <button class="btn">View Product</button>
      </div>`;
  });
}
loadProducts(products);

/* OPEN PRODUCT DETAILS */
function openProduct(id){
  localStorage.setItem("selected",id);
  window.location="product.html";
}

/* SEARCH FILTER */
document.getElementById("searchInput").addEventListener("keyup",(e)=>{
  const val=e.target.value.toLowerCase();
  let result=products.filter(p=>p.name.toLowerCase().includes(val));
  loadProducts(result);
  document.getElementById("notFound").innerText = result.length?"" : "❌ No Item Found";
});

function buyNow(productId){
    localStorage.setItem("buyProduct", productId);
    window.location.href = "checkout.html"; // Yahi payment page open karega 🔥
}
