function openSignInModal() {
    document.getElementById("signinModal").style.display = "flex";
}

function closeSignInModal() {
    document.getElementById("signinModal").style.display = "none";
}

let currentSlide = 0;
  showSlide(currentSlide);

  function showSlide(index) {
    const slides = document.getElementsByClassName('mySlides');
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';
  }

  function changeSlide(n) {
    showSlide(currentSlide + n);
  }

  // Auto change slides every 3 seconds (adjust the interval as needed)
  setInterval(function() {
    changeSlide(1);
  }, 3000);


function nextSlide() {
    currentSlide = (currentSlide + 1) % 2; // Adjust the number based on the number of slides
    updateSlider();
}

function updateSlider() {
    const container = document.getElementById('sliding-container');
    container.style.transform = 'translateX(' + (-currentSlide -70) + '%)';
}

// Automatic sliding, change slide every 5 seconds
setInterval(nextSlide, 700);


const menuIcon = document.querySelector("#menuIcon")
const closeIcon = document.querySelector("#closeIcon")
const ulList = document.querySelector("#ul")

menuIcon.addEventListener("click", function() {
    menuIcon.style.display = "none"
    closeIcon.style.display = "block"
    ulList.classList.add("block")
    ulList.style.paddingTop = "40px"
    ulList.style.fontSize = "30px"
    ulList.style.paddingRight = "15px"
})

closeIcon.addEventListener("click", function() {
    menuIcon.style.display = "block"
    closeIcon.style.display = "none"
    ulList.style.display = "none"

})



function sendMail(){
    let params ={
         name:document.getElementById("name").value,
         email:document.getElementById("email").value,
         massage:document.getElementById("message").value,

    }

    const serverID="service_k17th6i";
    const templateID = "template_z3tosm7";
   
    
    
    
    emailjs.send(serverID, templateID, params)
    .then(
       res => {
         document.getElementById("name").value = "";
         document.getElementById("email").value = "";
         document.getElementById("message").value = "";
         console.log(res);
         alert("massage sent ")
       }
    ).catch(err=> console.log(err)) ;  
}







