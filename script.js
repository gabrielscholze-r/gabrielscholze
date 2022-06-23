function languages(x) {
  if (x === 6) {
    $('#lang-description').fadeOut(100)
    setTimeout(function () {
      document.getElementById('lang-description').innerHTML =
        'Conhecimentos em Python puro e bibliotecas como Simpy, PM4PY (Process Mining for Python), Pandas e Pickle.'
    }, 100)
    $('#lang-description').fadeIn()
  } else if (x === 1) {
    $('#lang-description').fadeOut(100)
    setTimeout(function () {
      document.getElementById('lang-description').innerHTML =
        'Conhecimento intermetiário em HTML!'
    }, 100)
    $('#lang-description').fadeIn()
  } else if (x === 2) {
    $('#lang-description').fadeOut(100)
    setTimeout(function () {
      document.getElementById('lang-description').innerHTML =
        'Conhecimento intermetiário em CSS!'
    }, 100)
    $('#lang-description').fadeIn()
  } else if (x === 3) {
    $('#lang-description').fadeOut(100)
    setTimeout(function () {
      document.getElementById('lang-description').innerHTML =
        'Conhecimento intermetiário em JavaScript!'
    }, 100)
    $('#lang-description').fadeIn()
  } else if (x === 4) {
    $('#lang-description').fadeOut(100)
    setTimeout(function () {
      document.getElementById('lang-description').innerHTML =
        'Conhecimento amplo em Java, trabalhando com orientação a objetos avançada e bibliotecas nativas do java!';
    }, 100)
    $('#lang-description').fadeIn()
  } else if (x === 5) {
    $('#lang-description').fadeOut(100);
    setTimeout(function () {
      document.getElementById('lang-description').innerHTML =
        'Conhecimento básico em C#, aprendizado feito apenas por meio da plataforma Unity de desenvolvimento de jogos!';
    }, 100)
    $('#lang-description').fadeIn();
  
  } else if (x === 8) {
    $('#lang-description').fadeOut(100)
    setTimeout(function () {
      document.getElementById('lang-description').innerHTML =
        'Conhecimento básico em React no momento, que deverá se tornar avançado até o fim de 2021!';
    }, 100)
    $('#lang-description').fadeIn()
  }
}

const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});









const navSlide = () => {
  const burg = document.querySelector('.burg')
  const nav = document.querySelector('.nav-links')
  const navLink = document.querySelectorAll('.nav-links li')

  burg.addEventListener('click', () => {
    burg.classList.toggle('toggle')

    navLink.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
      }
    })
    nav.classList.toggle('nav-active')
  })
}
navSlide()



