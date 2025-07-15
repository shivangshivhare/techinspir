// gsap.to("#part3 #one",{
//     scrollTrigger:{
//         trigger:"#one",
//         scroller:"body",
//         start:"top 0%",
//         end: "bottom -250%",
//         // markers:true,
//         pin:true,
//         scrub:true         
    
//     }
// })


// ScrollTrigger.saveStyles(".gs_reveal_fromLeft, .gs_reveal_fromRight, .gs_reveal");

// ScrollTrigger.matchMedia({
	
//   // desktop
//   "(min-width: 800px)": function() {

// //Reveal Animations Scrolltrigger
// function animateFrom(elem, direction) {
//   direction = direction | 1;
  
//   var x = 0,
//       y = direction * 100;
//   if(elem.classList.contains("gs_reveal_fromLeft")) {
//     x = -100;
//     y = 0;
//   } else if(elem.classList.contains("gs_reveal_fromRight")) {
//     x = 100;
//     y = 0;
//   }
//   gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
//     duration: 1.25, 
//     x: 0,
//     y: 0, 
//     autoAlpha: 1, 
//     ease: "expo", 
//     overwrite: "auto"
//   });
// }

//   },

//   // mobile
//   "(max-width: 799px)": function() {
//     return function() {
//       gsap.kill(); 
//       // other cleanup code can go here. 
//     };
//   }

//   },
	
//   // all 
//   "all": function() {
//     function hide(elem) {
//       gsap.set(elem, {autoAlpha: 0});
//     }
    
//     document.addEventListener("DOMContentLoaded", function() {
//       gsap.registerPlugin(ScrollTrigger);
      
//       gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
//         hide(elem); // assure that the element is hidden when scrolled into view
        
//         ScrollTrigger.create({
//           trigger: elem,
//           onEnter: function() { animateFrom(elem) }, 
//           onEnterBack: function() { animateFrom(elem, -1) },
//           onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
//         });
//       });
//     });
//   }
// 	); 


var h5 = document.querySelector("#Navigation-right>h5");
var mnav = document.querySelector("#mnav");
h5.addEventListener("click", function(){
    mnav.style.display = "initial";
});
var doh5 = document.querySelector("#mnav>h5");
doh5.addEventListener("click", function(){
    mnav.style.display = "none";
});
