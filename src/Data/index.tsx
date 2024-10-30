import { v4 as uuidv4 } from 'uuid';
import { ICategory, IForminput, IProduct } from '../Interfaces';

export const Products: IProduct[] = [
  {
    id: uuidv4(),
    title: "Classic Shirt",
    img: "./Product4.jpeg",
    description: "A classic shirt crafted from soft, breathable cotton, designed for both comfort and style. This shirt features a tailored fit, with a sharp collar and button-down front for a clean and modern look.",
    price: '500',
    category: {
      name: "Shirt",
      img: "./Tshirt.jpg"
    },
    color: ["#FF5733", "#4B0082", "#FFD700"] 
  },
  {
    id: uuidv4(),
    title: "Vintage Denim Jacket",
    img: "./product5.png",
    description: "A timeless denim jacket with a vintage wash, crafted for both durability and a stylish finish. This jacket has a relaxed fit and versatile design, ideal for layering over any casual outfit.",
    price: "1200",
    category: {
      name: "Jacket",
      img: "./Jacket.webp"
    },
    color: ["#1E90FF", "#808080", "#4682B4"] 
  },
  {
    id: uuidv4(),
    title: "Casual Sneakers",
    img: "./product6.webp",
    description: "Lightweight sneakers crafted for everyday wear, made from breathable materials and designed to offer both comfort and style. Perfect for casual outfits, with a durable sole for all-day wear.",
    price: "700",
    category: {
      name: "Footwear",
      img: "./Shoes.png"
    },
    color: ["#462f2f", "#000000", "#4169E1"] 
  },
  {
    id: uuidv4(),
    title: "Graphic T-Shirt",
    img: "./Product9.png",
    description: "A casual T-shirt showcasing a unique graphic design, adding personality to any outfit. Made from soft cotton, this shirt is perfect for expressing your style in a relaxed, comfortable way.",
    price: "300",
    category: {
      name: "T-Shirt",
      img: "./Tshirt.jpg"
    },
    color: ["#000000", "#4a2e55", "#A9A9A9"] 
  },
  {
    id: uuidv4(),
    title: "Chino Pants",
    img: "./Product10.webp",
    description: "Classic chino pants made from high-quality cotton for comfort and durability. These pants offer a relaxed yet refined look, making them versatile for both casual and semi-formal occasions.",
    price: "600",
    category: {
      name: "Pants",
      img: "./Pants.jpeg"
    },
    color: ["#D2B48C", "#556B2F", "#000080"] 
  },
  {
    id: uuidv4(),
    title: "Formal Blazer",
    img: "./Product11.webp",
    description: "A sophisticated blazer with a tailored fit, ideal for formal events and office wear. Designed to offer a modern, polished look, with quality stitching and material for lasting appeal.",
    price: "2000",
    category: {
      name: "Blazer",
      img: "./Blazer.jpg"
    },
    color: ["#000000", "#696969", "#2F4F4F"] 
  },
  {
    id: uuidv4(),
    title: "Sweatshirt Hoodie",
    img: "./Product12.jpeg",
    description: "A cozy hoodie crafted from soft fabric, ideal for casual outings or lounging. With a relaxed fit and drawstring hood, this hoodie combines warmth and style for everyday comfort.",
    price: "800",
    category: {
      name: "Hoodie",
      img: "./Product12.jpeg"
    },
    color: ["#708090", "#000080", "#3CB371"] 
  }
  
];


export const FormIputData:IForminput[]=[
  {
    id:"title",
    name:"title",
    label:"Product Title",
    type:"text"
  },
  {
    id:"description",
    name:"description",
    label:"Product Description",
    type:"text"
  },
  {
    id:"img",
    name:"img",
    label:"Product Image",
    type:"text"
  },
  
  {
    id:"price",
    name:"price",
    label:"Product Price",
    type:"text"
  }

]

export const Colors:string[]=[
  "#3730A3", 
  "#84D2C5", 
  "#DC2626", 
  "#FF5733", 
  "#3357FF", 
  "#FF33A8", 
  "#33FFF6", 
  "#FFBF33", 
  "#8D33FF", 
  "#3C2A21", 
  "#FF33F6", 
  "#13005A", 
]

export const Category:ICategory[]=[
  {
    id:uuidv4(),
    name:"T-Shirt",
    img:"./Tshirt.jpg"
  },
  {
    id:uuidv4(),
    name:"Shoes",
    img:"./Shoes.png"
  },
  {
    id:uuidv4(),
    name:"Hoodie",
    img:"./Product12.jpeg"
  },
  {
    id:uuidv4(),
    name:"Blazer",
    img:"./Blazer.jpg"
  },
  {
    id:uuidv4(),
    name:"Pants",
    img:"./Pants.jpeg"
  },
  {
    id:uuidv4(),
    name:"Jacket",
    img:"./Jacket.webp"
  },



] 