let tl = gsap.timeline({defaults:{ease:'power2.out'}})

tl.to('.slider', {y:'-100%', duration:2})
tl.to('main', {y:0}, {duration:'-=.3'})
tl.fromTo('nav', {opacity:0},{opacity:1})
