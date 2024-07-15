# GSAP
1. Add cdn of gsap from gsap cdn
2. In js file start with :--
    gsap.to("#box1", {
        x: 1200,
        duration: 2,
        delay: 1,
        rotate: 360,
        backgroundColor: "pink",
        scale: 0.5,
        borderRadius: "50%"
    })
    gsap.from("#box2", {
        x: 1200,
        duration: 2,
        delay: 1,
        rotate: 360,
        backgroundColor: "pink",
        scale: 0.5,
        borderRadius: "50%"
    })

3. stagger :--
    gsap.from(".gsap-2 h1", {
        y: 90,
        duration: 2,
        delay: 1,
        color: "green",
        opacity: 0,
        stagger: -0.4 (value can be +ve or -ve)
    })

4. repeat and yoyo :--
    gsap.to("#box1", {
        x: 1200,
        duration: 2,
        delay: 1,
        rotate: 360,
        backgroundColor: "pink",
        scale: 0.5,
        borderRadius: "50%",
        repeat: -1, [for infinte use -1 else use +ve value only]
        yoyo: true
    })

5. GSAP timeline :--
    var tl = gsap.timeline();
    tl.from(".logo", {
        y: -40,
        delay: 1,
        duration: 2
    })
    tl.from(".links a", {
        y: -40,
        duration: 2,
        stagger: .3
    })
    tl.from(".part-2-h1", {
        scale: 0,
        duration: 1.5
    })

6. Use of scrollTrigger :--
    gsap.from("#page-1 .box", {
        scale: 0,
        delay: 1,
        duration: 3,
        rotate: 360,
    });

    gsap.from("#page-2 .box", {
        scale: 0,
        duration: 2,
        rotate: 760,
        scrollTrigger: {
            trigger: "#page-2 .box",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "top 30%",
            scrub: 2 // value can be (true or false) or from 0 t0 5
        },
    });

    gsap.from("#page-3 h1", {
        //   scale: 0,
        x: "110%",
        scrollTrigger: {
            trigger: "#page-3",
            scroller: "body",
            markers: true,
            start: "top 0%",
            end: "top -150%",
            scrub: 2,
            pin: true
        },
    });

7. SVG :---

    var initialPath = `M 10 100 Q 500 100 990 100`
    var finalPath = `M 10 100 Q 500 100 990 100`

    var p1 = document.querySelector("#p1")
    p1.addEventListener("mousemove", function(dets){
        // console.log(dets);
        initialPath = `M 10 100 Q ${dets.x} ${dets.y - 400} 990 100`
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

8. Creating Custom Cursor :---