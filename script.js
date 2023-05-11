// Add your JavaScript code here

// Example of an animation using DOM manipulation and event listener
const animateBtn = document.getElementById('animate-btn');
const featureList = document.querySelectorAll('#features ul li');

animateBtn.addEventListener('click', () => {
  featureList.forEach((feature, index) => {
    setTimeout(() => {
      feature.classList.add('animated');
    }, index * 500);
  });
});
