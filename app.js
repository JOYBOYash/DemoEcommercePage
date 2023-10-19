const wrapper = document.querySelector(".sliderWrap");
const menu = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Xquic Luna",
        price: 24.9,
        colors: 
        [
          {
              code: "#7e2811",
              img: "imgs/Luna1.png",
          },
          {
              code: "slategrey",
              img: "imgs/Luna2.png",
          },
        ],
    },
    {
        id: 2,
        title: "Knock Knock!",
        price: 9.9,
        colors: 
        [
          {
              code: "#ff0800",
              img: "imgs/Shinchan1.png",
          },
          {
              code: "yellow",
              img: "imgs/Shinchan2.png",
          },
        ],
    },
    {
        id: 3,
        title: "Anime Bucky",
        price: 14.9,
        colors: 
        [
          {
              code: "#4682b4",
              img: "imgs/Bucky1.png",
          },
          {
              code: "slategrey",
              img: "imgs/Bucky2.png",
          },
        ],
    },
    {
        id: 4,
        title: "Sketch of Faith",
        price: 4.9,
        colors: 
        [
          {
              code: "#708090",
              img: "imgs/Miles2.png",
          },
          {
              code: "navy",
              img: "imgs/Miles1.png",
          },
        ],
    },
    {
        id: 5,
        title: "Show'em Saiyan!",
        price: 3.9,
        colors: 
        [
          {
              code: "rgb(241, 132, 62)",
              img: "imgs/Goku1.png",
          },
          {
              code: "orangered",
              img: "imgs/Goku2.png",
          },
        ],
    },
];

let choosenProduct = products [0]
const currentProductImg = document.querySelector(".artimg");
const currentProductTitle = document.querySelector(".artTitle");
const currentProductPrice = document.querySelector(".artPrice");
const currentProductColors = document.querySelectorAll(".color");


menu.forEach((item,index)=> {
    item.addEventListener("click", () => {
        //change current slide 
        wrapper.style.transform = `translateX(${-100*index}vw)`;
        //change chosen art
        choosenProduct = products[index]
        //change Title of art
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = choosenProduct.price + " ₹ ";
        currentProductImg.src = choosenProduct.colors[0].img;
        //Assign new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code; 
        });
    });
});
currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
    currentProductImg.src = choosenProduct.colors[index].img
   })
})

const artbuy = document.querySelector(".artbtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

artbuy.addEventListener("click",()=>{
    payment.style.display = "flex"
})

close.addEventListener("click",()=>{
    payment.style.display = "none"
})
window.addEventListener("load", function() {
    const form = document.getElementById('Gform');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Successfully Submitted!, You'll recieve Mail from us Soon..");
      })
    });
  });
  