const swiper = new Swiper('.swiper', {
  speed: 1800,
  loop: true,
  autoplay: {
    delay: 1200,
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },

  breakpoints: {
    1300: {
      slidesPerView: 2,
      spaceBetween: 10
    },
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
  }
});


function timer() {
  const countdown = document.getElementById("timer");

  let time = 1800;
  setInterval(() => {
    time = time - 1;
    let minute = parseInt(time / 60);
    let second = parseInt(time % 60);
    countdown.innerHTML = `${minute}` + ':' + `${second}`;
  }, 1000);

}

timer();


const btnForm = document.querySelector('.form__btn'),
  btns = document.querySelectorAll('.btn')
orderForm = document.querySelector('.form')

btnForm.addEventListener('click', (e) => {
  e.preventDefault()
})

btns.forEach(e => {
  e.addEventListener('click', () => {
    orderForm.scrollIntoView({ behavior: "smooth" })
  })
})