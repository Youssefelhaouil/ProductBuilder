import { ProductName } from "../Types"

export interface IProduct {
  id?: string ,
  img:string,
  title: string,
  description:string,
  price:string,
  category:{
    name:string,
    img:string
  },
  color:string[]
}
export interface IForminput {
  label:string,
  name: ProductName,
  type:string,
  id:string
}
export interface ICategory{
  id:string,
  name:string,
  img:string
}