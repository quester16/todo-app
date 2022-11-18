function anim(selector) {

  const item = document.querySelector(selector);

  gsap.from(item, { opacity: 0, x: 20, delay: .1 })
}

export default anim;