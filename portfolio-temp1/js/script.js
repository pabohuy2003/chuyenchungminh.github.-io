// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let readMoreBtn = document.querySelector("#read-more-btn");
let moreInfo = document.querySelector(".more-info");
moreInfo.style.display = 'none'

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

readMoreBtn.onclick = () => {
  if (readMoreBtn.innerHTML === 'Read More') {
    moreInfo.style.display = 'block'
    readMoreBtn.innerHTML = 'Show Less'
  } else {
    moreInfo.style.display = 'none'
    readMoreBtn.innerHTML = 'Read More'
  }
}

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
      // active sections for animation on scroll
      sec.classList.add("show-animate");
    }
    // if want to use animation that repeats on scroll use this
    else {
      // sec.classList.remove("show-animate");
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");

  // animation footer
  let footer = document.querySelector("footer");
  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

function display() {
  var refresh = 1000;
  setTimeout('startTime()', refresh)
}

function startTime() {
  var x = new Date().toLocaleString();
  document.getElementById('clock').innerHTML = x;
  display();
}

startTime()