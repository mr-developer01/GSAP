var initialPath = `M 10 100 Q 500 100 990 100`
var finalPath = `M 10 100 Q 500 100 990 100`

var p1 = document.querySelector("#p1")
p1.addEventListener("mousemove", function(dets){
    // console.log(dets);
    initialPath = `M 10 100 Q ${dets.x} ${dets.y - 350} 990 100`
    gsap.to("svg path", {
        attr: {d: initialPath},
        duration: 0.2,
        ease: "power3.out"
    })
})
p1.addEventListener("mouseleave", function(dets){
    // console.log(dets);
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
    })
})