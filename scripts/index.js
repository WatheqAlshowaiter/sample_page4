// services space-content
//       <!-- <div class="services space-content">
//       <div class="item">
//       <img src="images/pic01.jpg" alt="Image 1" />
//       <h3>Lorem ipsum dolor sit amet.</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
//         deleniti asperiores nobis minus ullam consequatur rem cupiditate
//         odit magni cumque!
//       </p>
//       <button>LEARN MORE</button>
//     </div>
//     <div class="item"></div>
//     <div class="item">
//       <img src="images/pic02.jpg" alt="Image 2" />
//       <h3>Lorem ipsum dolor sit amet.</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
//         deleniti asperiores nobis minus ullam consequatur rem cupiditate
//         odit magni cumque!
//       </p>
//       <button>LEARN MORE</button>
//     </div>
//   </div> -->

const servicesSection = document.getElementById("services");
servicesSection.classList.add("services", "space-content");

// item 1
const item1 = document.createElement("div");
item1.classList.add("item");

const img1 = document.createElement("img");
img1.src = "images/pic01.jpg";
img1.alt = "Image 1";
item1.appendChild(img1);

const headerThree1 = document.createElement("h3");
headerThree1.innerText = "Lorem ipsum dolor sit amet.";
item1.appendChild(headerThree1);

const p1 = document.createElement("p");
p1.innerText =
  " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deleniti asperiores nobis minus ullam consequatur rem cupiditate odit magni cumque!";
item1.appendChild(p1);

const button1 = document.createElement("button");
button1.innerText = "LEARN MORE";

item1.appendChild(button1);

// item 2
const item2 = document.createElement("div");
item2.classList.add("item");

const img2 = document.createElement("img");
img2.src = "images/pic02.jpg";
img2.alt = "Image 2";
item2.appendChild(img2);

const headerThree2 = document.createElement("h3");
headerThree2.innerText = "Lorem ipsum dolor sit amet.";
item2.appendChild(headerThree2);

const p2 = document.createElement("p");
p2.innerText =
  " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deleniti asperiores nobis minus ullam consequatur rem cupiditate odit magni cumque!";
item2.appendChild(p2);

const button2 = document.createElement("button");
button2.innerText = "LEARN MORE";

item2.appendChild(button2);

servicesSection.appendChild(item1);
servicesSection.appendChild(item2);

// Responsive navbar
const menu = document.querySelector(".menu");
const ul = document.querySelector(".header-header > nav > ul");

menu.addEventListener("click", function () {
  ul.classList.toggle("active");
  console.log("toggle");
});