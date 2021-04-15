import gsap, { TimelineMax } from 'gsap'


var circle = document.getElementsByClassName("circle")
var tl = new TimelineMax()
tl.staggerFrom(circle, 1.5, {
    opacity: 0,
    x: 500,
}, 0.5)

var circle1 = document.getElementById('circle1')
var circle2 = document.getElementById('circle2')
var circle3 = document.getElementById('circle3')

const addMouseOverAndOutToElement = (el) => {
    el.addEventListener('mouseover', () => {
        gsap.to(el, {
            width: "500px",
            height: "500px",
            x: 300,
            duration: 1,
            ease: 'expo'
        })
    })
    el.addEventListener('mouseout', () => {
        gsap.to(el, {
            width: "200px",
            height: "200px",
            x: 0,
            duration: 1,
            ease: 'expo'
        })
    })
}

addMouseOverAndOutToElement(circle1)
addMouseOverAndOutToElement(circle2)
addMouseOverAndOutToElement(circle3)
// // 1 package bundler parcel