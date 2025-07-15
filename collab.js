collabpage = [
    {dp:  "https://plus.unsplash.com/premium_photo-1670948083554-dde9411f3d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",name:"Name 1", collegename:"landcat", details:"lorem7sjhdzhhseujja  lorem7sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja"},
    {dp:  "https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",name:"Name 2", collegename:"oriental", details:" lorem7sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja"},
    {dp:  "https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",name:"Name 3", collegename:"iit somewhere", details:"eujja  lorem7sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja"},
    {dp:  "https://plus.unsplash.com/premium_photo-1670088465712-2da547587a15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",name:"Name 4", collegename:"manit", details:"lorem7sjhdzhhseujja  lorem7sjhdseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja"},
    {dp:  "https://plus.unsplash.com/premium_photo-1679440414587-e3a0562ec34f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",name:"Name 5", collegename:"nit bhopal", details:"lorem7sjhdzhhseujja  lorem7hdklvnsd, sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja"},
    {dp:  "https://images.unsplash.com/photo-1441786485319-5e0f0c092803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",name:"Name 6", collegename:"rgpv", details:"lorem7sjhdzhhseumjja  lorelorem7sjhdzhhseumjja  lore 7sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja"},
    {dp:  "https://images.unsplash.com/photo-1441786485319-5e0f0c092803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",name:"Name 7", collegename:"rgpv", details:"lorem7sjhdzhhseumjja  lorelorem7sjhdzhhseumjja  lore 7sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja"}

];

var clutter = "";

collabpage.forEach(function(elem, index) {
    clutter += `<div class="collab-container">
    <div class="img-container">
        <div class="img-holder">
            <img src="${elem.dp}" alt="">
        </div>
    </div>
    <div class="content">
        <h3>${elem.name}</h3>
        <h4>${elem.collegename}</h4>
        <h5>Project Description: ${elem.details}</h5>
    </div>
    <div class="buttons">
        <button id="${index}"> Contribute</button>
    </div>

</div> `
});
document.querySelector("#hero").innerHTML += clutter;

// var menu = document.querySelector("#Navigation-right>i")
// var onetime = 0;
// if (onetime == 0){ 
//     menu.addEventListener("click", function(){
        
//     });
// }

var h5 = document.querySelector("#Navigation-right>h5");
var mnav = document.querySelector("#mnav");
h5.addEventListener("click", function(){
    mnav.style.display = "initial";
});
var doh5 = document.querySelector("#mnav>h5");
doh5.addEventListener("click", function(){
    mnav.style.display = "none";
});