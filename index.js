let tl = gsap.timeline({defaults:{ease:'power2.out'}})

tl.fromTo('.slider', {opacity:50},{opacity:0,duration:2})
tl.to('main', {y:0})
tl.fromTo('nav', {opacity:0},{opacity:1})
