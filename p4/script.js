var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")
var img = document.querySelector("#img")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y
    })
})

img.addEventListener("mouseenter", function(dets){
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 3
    })
})

img.addEventListener("mouseleave", function(dets){
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1
    })
})