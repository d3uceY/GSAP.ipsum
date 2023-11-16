gsap.registerPlugin(ScrollTrigger)


const splitTypes = document.querySelectorAll('.reveal-text')

splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars, words' })

    
    gsap.from(text.words, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 10%',
            scrub: 1,
        },
        autoAlpha: 0,
        stagger: 0.1,
        y: -40
    })
})










// lenis smooth scroll setup
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
// lenis smooth scroll setup