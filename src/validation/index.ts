export const formValidation = (product: {
  title: string;
  img: string;
  description: string;
  price: string;
}) => {
    

  const errors: {title: string; img: string; description: string; price: string;} = {
    title: "",
    img: "",
    description: "",
    price: "",
  };
  const regexpUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.img);
  
  if(!product.title.trim() || product.title.length>80){
    errors.title="Product title must be  between 10 and 80 characters! "
  }

  if(!product.description.trim() || product.description.length <10 ||product.description.length>900){
    errors.description="Product description must be  between 10 and 900 characters! "
  }
  if(!product.img.trim() || !regexpUrl ){
    errors.img="Invalid Image Url "
  }
  if(!product.price.trim() || isNaN(Number(product.price))){
    errors.price="the price must be a Number"
  }


  return errors;

};
