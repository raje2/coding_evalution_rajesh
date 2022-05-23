//store the products array in localstorage as "products"
let form=document.querySelector("#products");

document.querySelector("#add_product").addEventListener("click",myFunction);

function myFunction(){
    event.preventDefault();
   
    let dataArr=JSON.parse(localStorage.getItem("products")) || [];

    let dataObj=
        {
            type: form.type.value,
            desc: form.desc.value,
            price: form.price.value,
            image: form.image.value
      }

      dataArr.push(dataObj)
      localStorage.setItem("products",JSON.stringify(dataArr))
      window.location.reload();
    
}
// show products button

document.querySelector("#show").addEventListener("click",myFunction);

function myFunction(){
    window.location.href="inventory.html"
}

