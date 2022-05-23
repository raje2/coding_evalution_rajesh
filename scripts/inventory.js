let data=JSON.parse(localStorage.getItem("products"));

display(data)

function display(){
    data.forEach(function(el,index){
        var p1=document.createElement("p")
        p1.innerText=el.type
        var p2=document.createElement("p")
        p2.innerText=el.desc
        var p3=document.createElement("p")
        p3.innerText=el.price
        var img=document.createElement("img")
        img.src=el.image
        var dlt=document.createElement("button")
        dlt.innerText="Remove"
        dlt.style.color="red"
        dlt.addEventListener("click",function(){
            myRemove(el,index)
        })

        document.querySelector("#all_products").append(p1,p2,p3,img,dlt)

    })
}
function  myRemove(el,index){
    data.splice(index,1)
    localStorage.setItem("products",JSON.stringify(data));
    window.location.reload();
}
// addmore button function ...

document.querySelector("#add_more_product").addEventListener("click",myFunction);

function myFunction(){
    window.location.href="index.html"
}