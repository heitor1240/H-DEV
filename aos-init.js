const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
script.onload = () => {
  AOS.init({
    duration: 1000,
    once: true
  });
};
document.head.appendChild(script);
