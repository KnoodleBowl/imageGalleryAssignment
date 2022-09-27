const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']
/* Declaring the alternative text for each image file */
const alt = {
  'pic1.jpg' : 'close-up of eye',
  'pic2.jpg' : 'wavy art',
  'pic3.jpg' : 'purple and white flowers', 
  'pic4.jpg' : 'egyptian art', 
  'pic5.jpg' : 'butterfly on leaf'}
/* Looping through images */
for(const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alt[image]);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
  thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', e => {
  if(btn.textContent === 'Darken') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
  else if (btn.textContent === 'Lighten') {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }

  
})