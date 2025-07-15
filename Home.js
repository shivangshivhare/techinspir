const locowrapper = () => {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#wrapper"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#wrapper" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#wrapper", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
};
locowrapper();


var postButton = document.querySelector("#p1 button");
var ap=document.querySelector("#ap");
var apbtn=document.querySelector("#mainbtn");
var summary=document.querySelector("#summary")
postButton.addEventListener("click", function(){
    // postButton.style.backgroundColor = red;
    // ap.style.opacity=1;
    ap.style.display="initial"
});
apbtn.addEventListener("click",function(){
    // ap.style.opacity=0;
    // summary.style.opacity=1;
    gsap.to(summary,{
        display : 'initial',
    })
    // summary.style.display="initial"

})
document.addEventListener("dblclick", function(){
    // ap.style.display="none"
    // summary.style.display="none"
    gsap.to(ap,{
        display : "none",
    })
    gsap.to(summary, {
        display : "none",
    })
});

// var postButton = document.querySelector("#p1 button");
// var posticon = document.querySelector("#post-botton>i");
// postButton.addEventListener("click", function(){
//     // postButton.style.backgroundColor = `red`;
//     postButton.style.width = `80vh`;
//     postButton.style.borderRadius = `10%`;
//     postButton.style.height = `80vh`;
//     postButton.style.clipPath = `polygon(0 0, 100% 0, 100% 100%, 0 100%)`;
//     posticon.style.display = "none";
// });
// document.addEventListener("dblclick", function(){
//     postButton.style.width = `8vh`;
//     postButton.style.borderRadius = `50%`;
//     postButton.style.height = `8vh`;
//     posticon.style.display = "initial";
// });

let nav = document.querySelector("#Navigation");
let mainpage = document.querySelector("#mainpage");
let main = document.querySelector("#Main");
gsap.to(mainpage,{
    scrollTrigger:{
        trigger : mainpage,
        scroller : "#wrapper",
        start : "top 0%",
        end: "top -200%",
        scrub : 1,
        pin : true,
        // markers : true,
    }
})
gsap.to(main,{
    transform : "translateY(-1500%)",
    scrollTrigger:{
        trigger : main,
        scroller : "#wrapper",
        start : "top 0%",
        end: "top -500%",
        scrub : 1,
    }
})
gsap.to(nav,{
    y: -10,
    scrollTrigger:{
        trigger : nav,
        scroller : "#wrapper",
        start: "top 0%",
        end : "top -20%",
        scrub : 1,
    }
})



// --------------------------cluster code main page------------------
homepage = [
    {dp:  "https://plus.unsplash.com/premium_photo-1670948083554-dde9411f3d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",stname:"student 1", collegename:"landcat", details:"lorem7sjhdzhhseujja  lorem7sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja",skills:"cpp, c ",pjimg:"https://i.pinimg.com/videos/thumbnails/originals/17/27/07/17270763732c982a1836532b7914e140.0000000.jpg"},
    {dp:  "https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",stname:"student 2", collegename:"oriental", details:" lorem7sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja", skills:"java// frontend through java",pjimg:"https://i.pinimg.com/564x/a9/b0/6f/a9b06f92e64cad41dbe05b6122594874.jpg"},
    {dp:  "https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",stname:"student 3", collegename:"iit somewhere", details:"eujja  lorem7sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja", skills:"python / backend python bootstrap",pjimg:"https://th.bing.com/th/id/OIP.IJgkeyiGVuqvb5LB7Y4qaQAAAA?w=146&h=180&c=7&r=0&o=5&pid=1.7"},
    {dp:  "https://plus.unsplash.com/premium_photo-1670088465712-2da547587a15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",stname:"student 4", collegename:"manit", details:"lorem7sjhdzhhseujja  lorem7sjhdseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja",skills:"mern stack",pjimg:"https://i.pinimg.com/236x/36/0a/98/360a98fb0d649035112784dcddb14ed9.jpg"},
    {dp:  "https://plus.unsplash.com/premium_photo-1679440414587-e3a0562ec34f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",stname:"student 5", collegename:"nit bhopal", details:"lorem7sjhdzhhseujja  lorem7hdklvnsd, sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja",skills:"jsola jshzmnzx adjk",pjimg:"https://i.pinimg.com/236x/4a/d2/c8/4ad2c836bfa01a1724ba0289ea0eff57.jpg"},
    {dp:  "https://images.unsplash.com/photo-1441786485319-5e0f0c092803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",stname:"student 6", collegename:"rgpv", details:"lorem7sjhdzhhseumjja  lorelorem7sjhdzhhseumjja  lore 7sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja",skills:"jsola id the gratest jshzmnzx adjk",pjimg:"https://th.bing.com/th/id/OIP.7eJ6GQar0xkjVZeCY0KrYQHaDv?w=320&h=177&c=7&r=0&o=5&pid=1.7"},
    {dp:  "https://images.unsplash.com/photo-1441786485319-5e0f0c092803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",stname:"student 6", collegename:"rgpv", details:"lorem7sjhdzhhseumjja  lorelorem7sjhdzhhseumjja  lore 7sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja",skills:"jsola jshzmnzx k",pjimg:"https://th.bing.com/th/id/OIP.hImTQUINmKE5q_UMu75zYQHaDt?w=328&h=174&c=7&r=0&o=5&pid=1.7"},
    {dp:  "https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",stname:"student 2", collegename:"oriental", details:" lorem7sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja", skills:"java// frontend through java",pjimg:"https://i.pinimg.com/564x/a9/b0/6f/a9b06f92e64cad41dbe05b6122594874.jpg"},
    {dp:  "https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",stname:"student 3", collegename:"iit somewhere", details:"eujja  lorem7sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja", skills:"python / backend python bootstrap",pjimg:"https://th.bing.com/th/id/OIP.IJgkeyiGVuqvb5LB7Y4qaQAAAA?w=146&h=180&c=7&r=0&o=5&pid=1.7"},
    {dp:  "https://plus.unsplash.com/premium_photo-1670088465712-2da547587a15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",stname:"student 4", collegename:"manit", details:"lorem7sjhdzhhseujja  lorem7sjhdseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja",skills:"mern stack",pjimg:"https://i.pinimg.com/236x/36/0a/98/360a98fb0d649035112784dcddb14ed9.jpg"},
    {dp:  "https://plus.unsplash.com/premium_photo-1679440414587-e3a0562ec34f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",stname:"student 5", collegename:"nit bhopal", details:"lorem7sjhdzhhseujja  lorem7hdklvnsd, sjhdzhhseujja lorem7sjhdzhhseujja lorem7sjhdzhhseujja",skills:"jsola jshzmnzx adjk",pjimg:"https://i.pinimg.com/236x/4a/d2/c8/4ad2c836bfa01a1724ba0289ea0eff57.jpg"},

];


var clutter = "";

homepage.forEach(function(elem) {
    clutter += `<div id="display">
    <div id="display-s1">
        <img src="${elem.dp}" alt="">
        <div id="about-person">
            <h3>${elem.stname}</h3>
            <h4>${elem.collegename}</h4>
            <p>About-him</p>
        </div>
    </div>
    <div id="display-s2">                            
        <div id="discription-section">
                <h3>#Project title</h3>
        
                <p>
                    ${elem.details}}
                </p>
        </div>    
            <div id="control-section">
                <h3>#Skills Used</h3>
                <p>${elem.skills}</p>
            </div>

        <div id="vision-section">
            <img src="${elem.pjimg}" alt="">
        </div>
    </div>
</div> `
});
document.querySelector("#Main").innerHTML = clutter;



var h5 = document.querySelector("#Navigation-right>h5");
var mnav = document.querySelector("#mnav");
h5.addEventListener("click", function(){
    mnav.style.display = "initial";
});
var doh5 = document.querySelector("#mnav>h5");
doh5.addEventListener("click", function(){
    mnav.style.display = "none";
});