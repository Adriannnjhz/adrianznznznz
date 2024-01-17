document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  let currentSection = 0;

  function handleScroll(e) {
    if (e.deltaY > 0) {
      // Zoom in
      if (currentSection < sections.length - 1) {
        currentSection++;
        updateSections();
      }
    } else {
      // Zoom out
      if (currentSection > 0) {
        currentSection--;
        updateSections();
      }
    }
  }

  function updateSections() {
    sections.forEach((section, index) => {
      section.classList.remove('section-zoom-in', 'section-zoom-out');
      if (index === currentSection) {
        section.classList.add('section-zoom-in');
      } else {
        section.classList.add('section-zoom-out');
      }
    });
  }

  document.addEventListener('wheel', handleScroll);
  updateSections();
});





document.addEventListener('DOMContentLoaded', function () {
  const topMenu = document.querySelector('.top-menu');
  let lastScrollPosition = 0;

  window.addEventListener('scroll', function () {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {

      topMenu.classList.add('hidden');
    } else {

      topMenu.classList.remove('hidden');
    }

    lastScrollPosition = currentScrollPosition;
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const topMenu = document.querySelector('.top-menu');
  let lastScrollPosition = 0;

  window.addEventListener('scroll', function() {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {

      topMenu.classList.add('hidden');
    } else {

      topMenu.classList.remove('hidden');
    }

    lastScrollPosition = currentScrollPosition;
  });
});


function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}











const splashScreen = document.querySelector('.splash-screen');
const bgImage = document.querySelector('.bg-image');

setTimeout(() => {
  splashScreen.classList.add('step-2');
}, 1000);

setTimeout(() => {
  splashScreen.classList.add('step-3');
}, 2500);

setTimeout(() => {
  splashScreen.classList.add('step-4');
}, 3000);

setTimeout(() => {
  splashScreen.classList.remove('step-2', 'step-3');
  document.querySelector('h1').style.opacity = 1;
}, 4000);





const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image-in-track")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);













