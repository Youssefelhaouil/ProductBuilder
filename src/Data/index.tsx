import { v4 as uuidv4 } from 'uuid';
import { ICategory, IForminput, IProduct } from '../Interfaces';

export const Products: IProduct[] = [
  {
    id: uuidv4(),
    title: "Mercedes Benz E-Class",
    img: "https://vehicle-images.dealerinspire.com/stock-images/chrome/fc0daf7a899288ffcf698982cf1fc2d2.png",
    description: "A luxury sedan with advanced features, high-quality interiors, and impressive engine performance, ideal for comfort and style on every drive.",
    price: "75000",
    category: {
      name: "Mercedes",
      img: "./Mercedes.webp"
    },
    color: ["#FF5733", "#4B0082", "#FFD700"]
  },
  {
    id: uuidv4(),
    title: "Ford Ranger",
    img: "https://cdn.drivek.com/configurator-imgs/trucks/it/800/FORD/RANGER-RAPTOR/8500_DOUBLE-CAB-PICK-UP/ford-ranger-raptor-22-front-view.jpg",
    description: "A powerful pickup truck designed for both off-road capability and city driving. Equipped with a rugged design and durable engine for any terrain.",
    price: "45000",
    category: {
      name: "Ford",
      img: "./ford.png"
    },
    color: ["#1E90FF", "#808080", "#4682B4"]
  },
  {
    id: uuidv4(),
    title: "Dacia Duster 2024",
    img: "https://mimex-auto-export.com/wp-content/uploads/2024/02/dacia-duster-algerie-gris-comete-800x450.png",
    description: "An affordable, compact SUV with a modern design, spacious interior, and efficient engine, ideal for both city commutes and adventures.",
    price: "25000",
    category: {
      name: "Dacia",
      img: "./dacia.png"
    },
    color: ["#000000", "#4a2e55", "#A9A9A9"]
  },
  {
    id: uuidv4(),
    title: "BMW M4",
    img: "https://img.freepik.com/premium-photo/car-white-bmw-with-black-wheels-isolated-white-background_725455-216.jpg",
    description: "A high-performance sports car with a powerful engine, precision handling, and iconic design, crafted for the ultimate driving experience.",
    price: "80000",
    category: {
      name: "BMW",
      img: "./bmw.jpg"
    },
    color: ["#462f2f", "#000000", "#4169E1"]
  },
  {
    id: uuidv4(),
    title: "Volvo XC40",
    img: "https://images.caradisiac.com/logos-ref/modele/modele--volvo-xc40/S8-modele--volvo-xc40.jpg",
    description: "A compact SUV combining safety, innovative features, and modern Scandinavian design. Perfect for urban lifestyles with ample space and comfort.",
    price: "55000",
    category: {
      name: "Volvo",
      img: "./volvo.png"
    },
    color: ["#D2B48C", "#556B2F", "#000080"]
  },
  {
    id: uuidv4(),
    title: "Toyota Venza",
    img: "https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb65e4157081e3d8e88cb10/stills_0640_png/MY2024/54063/54063_st0640_116.png",
    description: "A midsize SUV that offers a comfortable ride, sleek design, and hybrid efficiency. Ideal for families seeking both style and sustainability.",
    price: "40000",
    category: {
      name: "Toyota",
      img: "./toyota.jpg"
    },
    color: ["#000000", "#696969", "#2F4F4F"]
  },
  {
    id: uuidv4(),
    title: "Honda Civic",
    img: "https://images.caradisiac.com/logos-ref/modele/modele--honda-civic-9/S7-modele--honda-civic-9.jpg",
    description: "A compact, efficient, and stylish sedan known for its reliability, fuel economy, and advanced safety features, perfect for daily commuting.",
    price: "30000",
    category: {
      name: "Honda",
      img: "./honda.jpg"
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

export const Category: ICategory[] = [
  {
    id: uuidv4(),
    name: "Mercedes",
    img: "./Mercedes.webp"
  },
  {
    id: uuidv4(),
    name: "Dacia",
    img: "./dacia.png"
  },
  {
    id: uuidv4(),
    name: "BMW",
    img: "./bmw.jpg"
  },
  {
    id: uuidv4(),
    name: "Toyota",
    img: "./toyota.jpg"
  },
  {
    id: uuidv4(),
    name: "Ford",
    img: "./ford.png"
  },
  {
    id: uuidv4(),
    name: "Volvo",
    img: "./volvo.png"
  },
  {
    id: uuidv4(),
    name: "Honda",
    img: "./honda.jpg"
  },
  {
    id: uuidv4(),
    name: "Audi",
    img: "./audi.jpg"
  },
  {
    id: uuidv4(),
    name: "Tesla",
    img: "./tesla.jpg"
  },
  {
    id: uuidv4(),
    name: "Chevrolet",
    img: "./chevrolet.jpeg"
  },
  {
    id: uuidv4(),
    name: "Nissan",
    img: "./nissan.jpg"
  }
];
