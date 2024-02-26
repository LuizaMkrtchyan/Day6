const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
  ];
  
  let currentIndex = 0;
  const sliderImage = document.getElementById('slider-image');
  const prevButton = document.getElementById('prev-btn');
  const nextButton = document.getElementById('next-btn');
  
  function updateSlider() {
    sliderImage.src = images[currentIndex];
  }
  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateSlider();
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
  });
  
  // Initial slider setup
  updateSlider();
  