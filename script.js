// Custom silver cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// Smooth section scroll (navbar)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Init AOS (scroll animations)
if (window.AOS) {
  AOS.init({ duration: 900, once: true, offset: 60 });
}

// Optional: gentle parallax on robot with mouse move
const robot = document.getElementById("robotWrap");
if (robot) {
  const strength = 12; // smaller = subtler
  document.addEventListener("mousemove", (e) => {
    const { innerWidth: w, innerHeight: h } = window;
    const rx = ((e.clientX / w) - 0.5) * strength;
    const ry = ((e.clientY / h) - 0.5) * strength;
    robot.style.transform = `translate(${rx}px, ${-10 + ry}px)`; // keep float vibe
  });

  // return to resting pos after mouse leave
  document.addEventListener("mouseleave", () => {
    robot.style.transform = `translate(0,0)`;
  });
}
// Robot Typewriter Message
document.addEventListener("DOMContentLoaded", () => {
  const text = "Welcome to CubicByte";
  const textEl = document.getElementById("robotText");
  let i = 0;
  function type() {
    if (i < text.length) {
      textEl.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  setTimeout(type, 2500); // starts after robot enters
});
