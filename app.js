const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    Id: 1,
    title: "Bed",
    price: 500,
    colors: [
      {
        code: "black",
        img: "./thumbnails/gusa/BedNew.jpeg",
      },
      {
        code: "darkblue",
        img: "./thumbnails/gusa/BedNew.jpeg",
      },
    ],
  },
  {
    Id: 2,
    title: "Balcony",
    price: 500,
    colors: [
      {
        code: "lightgray",
        img: "./thumbnails/gusa/BalconyNew.jpeg",
      },
      {
        code: "green",
        img: "./thumbnails/gusa/BalconyNew.jpeg",
      },
    ],
  },
  {
    Id: 3,
    title: "Dinning",
    price: 500,
    colors: [
      {
        code: "lightgray",
        img: "./thumbnails/gusa/DinningNew.jpeg",
      },
      {
        code: "green",
        img: "./thumbnails/gusa/DinningNew.jpeg",
      },
    ],
  },
  {
    Id: 4,
    title: "Sitting",
    price: 500,
    colors: [
      {
        code: "black",
        img: "./thumbnails/gusa/SittingNew.jpeg",
      },
      {
        code: "lightgray",
        img: "./thumbnails/gusa/SittingNew.jpeg",
      },
    ],
  },
  {
    Id: 5,
    title: "Lamp",
    price: 500,
    colors: [
      {
        code: "gray",
        img: "./thumbnails/gusa/Lamp1.jpeg",
      },
      {
        code: "black",
        img: "./thumbnails/gusa/lamp1.jpeg",
      },
    ],
  },
]

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translate(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index]

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img
    //assign new colors
    currentProductColors.forEach((color,index)=>{
      color.style.backgroundColor = choosenProduct.colors[index].code;
    })
  });
  
});

currentProductColors.forEach((color,index)=>{
  color.addEventListener("click", ()=>{
    currentProductImg.src = choosenProduct.colors[index].img
  })
})

currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size) =>{
      size.style.backgroundColor= "white";
      size.style.color= "black";  
    })
    size.style.backgroundColor= "black";
    size.style.color= "white";
  })
})


const ProductButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

ProductButton.addEventListener("click",()=>{
payment.style.display="flex"
})

close.addEventListener("click",()=>{
  payment.style.display="none"
  })