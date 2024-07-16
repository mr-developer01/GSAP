var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var navIcon = document.querySelector("nav i")
var sliderIcon = document.querySelector("#slider i")
var slider = document.querySelector("#slider")
var links = document.querySelectorAll("#slider a")
// console.log(links);
var body = document.querySelector("body")

var tl = gsap.timeline()

tl.to(slider, {
    right: "0%",
    duration: 0.5
})

tl.from(links, {
    x: 50,
    opacity: 0,
    stagger: 0.2
})

tl.from(sliderIcon, {
    x: 20,
    opacity: 0,
})

tl.pause()

navIcon.addEventListener("click", function(){
    tl.play()
})

sliderIcon.addEventListener("click", function(){
    tl.reverse()
})


body.addEventListener("mouseenter", function(){
    gsap.to(cursor, {
        width: "2vw",
        height: "2vw"
    })
})

body.addEventListener("mouseleave", function(){
    gsap.to(cursor, {
        width: 0,
        height: 0
    })
})

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y
    })
})

navIcon.addEventListener("mouseenter", function(){
    gsap.to(cursor, {
        width: 0,
        height: 0
    })
})

slider.addEventListener("mouseenter", function(){
    gsap.to(cursor, {
        width: 0,
        height: 0,
    })
})

navIcon.addEventListener("mouseleave", function(){
    gsap.to(cursor, {
        width: "2vw",
        height: "2vw"
    })
})

slider.addEventListener("mouseleave", function(){
    gsap.to(cursor, {
        width: "2vw",
        height: "2vw",
        cursor: "move"
    })
})