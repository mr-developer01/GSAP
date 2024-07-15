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
