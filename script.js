// alert('hello')
const bar = document.getElementById("bars");
console.log(bar);
bar.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("navShow");
});

const ul = document.querySelectorAll("ul");
ul.forEach((li) => {
  // console.log(li)
  li.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("navShow");
  });
});

const about = document.querySelector("#about");
const arrow = document.querySelector("#gada");
// // Function to check if an element is in the viewport
// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return rect.top >= 0 && rect.bottom <= window.innerHeight;
// }

// Function to check if an element is above or in the viewport
function isAfterSection2() {
  const rect = about.getBoundingClientRect();
  return rect.bottom <= window.innerHeight;
}

// Scroll event listener
// window.addEventListener("scroll", () => {
//   if (isInViewport(section2)) {
//     arrow.style.display = "block"; // Show the arrow
//   } else {
//     arrow.style.display = "none"; // Hide the arrow
//   }
// });
window.addEventListener("scroll", () => {
  if (isAfterSection2()) {
    arrow.style.display = "block"; // Show the arrow
  } else {
    arrow.style.display = "none"; // Hide the arrow
  }
});
document.querySelector("#html").setAttribute("style", "width:80%");
document.querySelector("#css").setAttribute("style", "width:70%");
document.querySelector("#js").setAttribute("style", "width:60%");
document.querySelector("#react").setAttribute("style", "width:20%");

const alertBox = document.getElementById("alert-box");
const closeBtn = document.getElementById("close-btn");
const progressBar = document.getElementById("progress-bar");
const alertMessage = document.querySelector("#alert-message");

emailjs.init("RImYs7vGVLLjxe_o4");
const form = document.querySelector("#myForm");

console.log(closeBtn.innerHTML);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const msg = document.querySelector("#msg");
  if (name.value == "") {
    // alert("Please Enter your name");
    showAlert("Please enter your name !!");
  } else if (email.value == "") {
    showAlert("Please enter your email !!");
  } else if (email.value[email.value.length - 4] != ".") {
    showAlert("Please enter valid email !!");
  } else if (msg.value == "") {
    showAlert("Please enter a message !!");
  } else {
    name.value = "";
    email.value = "";
    msg.value = "";
    emailjs.sendForm("service_xgnrc6t", "template_tuwml1p", this).then(
      function () {
        // alert("Message sent successfully!");
        showAlert("Message sent successfully! !!", true);
      },
      function (error) {
        showAlert("Failed to send message. Please try again");
      }
    );
  }
});

function showAlert(message, success = false) {
  if (success) {
    alertBox.style.background = "green";
  }
  alertBox.classList.add("show");
  alertMessage.innerHTML = message;
  progressBar.classList.add("progress-bar-animation");
  setTimeout(() => {
    alertBox.classList.remove("show");
    progressBar.classList.remove("progress-bar-animation");
  }, 5000);
}
function closeAlert() {
  alertBox.classList.remove("show");
}

//   validation
// email.addEventListener('input',()=>{
//     if(name.value=="")
//         {
//             alert('Enter name first')
//         }

// })
// email.addEventListener('change',()=>{
//     let emailID = email.value;
//     if(emailID[emailID.length-4]!='.')
//     {
//         alert('Enter wrong emailID')

//     }

// })

// Select elements

// // Function to hide the alert
// function hideAlert() {
//   alertBox.classList.add("hidden");
//   setTimeout(() => {
//     alertBox.style.display = "none";
//   }, 300); // Matches the CSS transition time
//   alertBox.classList.remove('show')
// }

// // Automatically close alert after 5 seconds
// function closeAlert(bool){
//     if(bool==true){
// setTimeout(hideAlert, 5000); // 5000ms = 5 seconds
//     }
// }

// // Close button functionality
// closeBtn.addEventListener("click", hideAlert);

//date
let dt = new Date();
document.querySelector("#date").innerHTML = dt.getFullYear();

// document.addEventListener('scroll',()=>{
//   console.log(window.scrollY);
//   //  console.log(window.innerHeight)
// })
// const totalHeight = Math.max(
//   document.body.scrollHeight,
//   document.documentElement.scrollHeight
// );
// console.log(`The total height of the webpage is: ${totalHeight}px`);

window.addEventListener("mousemove", (e) => {
  // console.log(`ClientX: ${e.clientX} and ClientY: ${e.clientY}`);
  // console.log(`ScreenX: ${e.screenX} and ScreenY: ${e.screenY}`);
  let dop = document.querySelector("#dop");
  let topPosition = e.clientY - 5;
  // let leftPosition = e.clientX>10?e.clientX-15 : e.clientX+15;
  let leftPosition = e.clientX - 5;
  dop.setAttribute("style", `top:${topPosition}px;left:${leftPosition}px`);
});
// console.log(document.documentElement.scrollHeight)
// window.addEventListener('scroll', () => {
//   const distanceToScrollbarBottom = Math.floor(document.documentElement.scrollHeight - (window.scrollY + window.innerHeight));
//   console.log(`Distance to scrollbar bottom: ${distanceToScrollbarBottom}px`);
//   let totalHeight = document.documentElement.scrollHeight;
//   let percent = (distanceToScrollbarBottom/totalHeight)*100;
//   console.log(`${percent}%`)

// });
const scrollBox = document.getElementById("scroll-box");

window.addEventListener("scroll", () => {
  const totalHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;
  const viewportHeight = window.innerHeight;

  // Calculate scroll percentage
  const scrollPercentage = (scrollTop / (totalHeight - viewportHeight)) * 100;
  const displayPercentage = Math.min(Math.floor(scrollPercentage), 100);

  // Update the scroll box with the percentage
  if (displayPercentage < 100) {
    scrollBox.textContent = `${Math.floor(scrollPercentage)}%`;
  }

  // Check if the user has reached the bottom
  if (displayPercentage >= 96) {
    scrollBox.innerHTML = "↑"; // Change to up arrow when at the bottom
    scrollBox.classList.add("up-arrow"); // Add a class for styling the arrow
  } else {
    scrollBox.innerHTML = `${Math.floor(displayPercentage)}%`; // Show percentage when not at the bottom
    scrollBox.classList.remove("up-arrow"); // Remove up arrow styling
  }

  if (displayPercentage == 99) {
    document
      .querySelector("#scroll-behind")
      .setAttribute(
        "style",
        `background: conic-gradient(#00f2fe ${displayPercentage + 1}%,#fff ${
          displayPercentage + 1
        }%);`
      );
  } else {
    document
      .querySelector("#scroll-behind")
      .setAttribute(
        "style",
        `background: conic-gradient(#00f2fe ${displayPercentage}%,#fff ${displayPercentage}%);`
      );
  }
});

// Scroll to the top when clicking the up arrow
scrollBox.addEventListener("click", () => {
  if (scrollBox.classList.contains("up-arrow")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
