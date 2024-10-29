import { v4 as uuidv4 } from 'uuid';
import { IProduct } from '../Interfaces';

export const Products: IProduct[] = [
  {
    id: uuidv4(),
    title: "Classic Shirt",
    img: "./Product4.webp",
    description: "A classic shirt crafted from soft, breathable cotton, designed for both comfort and style. This shirt features a tailored fit, with a sharp collar and button-down front for a clean and modern look.",
    price: 500,
    category: {
      name: "Shirt",
      img: "./Product4.webp"
    },
    color: ["red-500", "indigo-500", "yellow-500"]
  },
  {
    id: uuidv4(),
    title: "Vintage Denim Jacket",
    img: "./product5.png",
    description: "A timeless denim jacket with a vintage wash, crafted for durability and style. The jacket has a relaxed fit and versatile design.",
    price: 1200,
    category: {
      name: "Jacket",
      img: "./product5.png"
    },
    color: ["blue-500", "gray-500"]
  },
  {
    id: uuidv4(),
    title: "Casual Sneakers",
    img: "./product6.webp",
    description: "Lightweight sneakers perfect for everyday wear. Made from breathable materials and designed for comfort.",
    price: 700,
    category: {
      name: "Footwear",
      img: "./product6.webp"
    },
    color: ["white", "black", "blue-600"]
  },
  
  {
    id: uuidv4(),
    title: "Graphic T-Shirt",
    img: "./Product9.webp",
    description: "A casual T-shirt with a unique graphic design, perfect for adding some personality to your outfit.",
    price: 300,
    category: {
      name: "T-Shirt",
      img: "./Product9.webp"
    },
    color: ["black", "white", "gray-500"]
  },
  {
    id: uuidv4(),
    title: "Chino Pants",
    img: "./Product10.webp",
    description: "Classic chino pants made from soft cotton, offering a comfortable fit and versatile style.",
    price: 600,
    category: {
      name: "Pants",
      img: "./Product10.webp"
    },
    color: ["beige", "olive", "navy"]
  },
  {
    id: uuidv4(),
    title: "Formal Blazer",
    img: "./Product11.webp",
    description: "A sophisticated blazer with a tailored fit, ideal for formal occasions and office wear. perfect for everyday wear",
    price: 2000,
    category: {
      name: "Blazer",
      img: "./Product11.webp"
    },
    color: ["black", "gray-700"]
  },
  {
    id: uuidv4(),
    title: "Sweatshirt Hoodie",
    img: "./Product12.jpeg",
    description: "A comfortable hoodie made from soft fabric, perfect for casual outings and lounging.",
    price: 800,
    category: {
      name: "Hoodie",
      img: "./Product12.jpeg"
    },
    color: ["gray-600", "navy", "green-500"]
  }
];
