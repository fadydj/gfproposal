let slideIndex = 0;
showSlides(slideIndex);

/* Next/previous controls
<!-- function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }
*/

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 0;
    }
    slides[slideIndex-1].style.display = "block";
    if (slideIndex === slides.length) {
      // Clear the setTimeout function to stop the slideshow
      clearTimeout(timeoutId);
      //show the button
      document.getElementById("video1-button").style.display = "block";
      document.getElementById("video2-button").style.display = "block";
    } else {
      // Set the setTimeout function to run the showSlides function again after 5 seconds
      timeoutId = setTimeout(showSlides, 1000);
    }
  }
  

  const button1 = document.getElementById("video1-button");
  const container1 = document.getElementById("video1-container");
  const video1 = document.getElementById("video1");

  const button2 = document.getElementById("video2-button");
  const container2 = document.getElementById("video2-container");
  const video2 = document.getElementById("video2");

  button1.addEventListener("click", () => {
    // show the first video container and set the src of the first video element to the first video URL
    container1.style.display = "block";
    video1.src = "img/firework.mp4";
    video1.requestFullscreen();
    document.getElementById("video1-button").style.display = "none";
    document.getElementById("video2-button").style.display = "none";
  });

  button2.addEventListener("click", () => {
    // show the second video container and set the src of the second video element to the second video URL
    container2.style.display = "block";
    video2.src = "img/boo.mp4";
    video2.requestFullscreen();
    document.getElementById("video1-button").style.display = "none";
    document.getElementById("video2-button").style.display = "none";
  });

  