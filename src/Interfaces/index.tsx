export interface IProduct {
  id?: string | undefined,
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
  name: 'title'|'img'|'description'|'price',
  type:string,
  id:string
}
export interface ICategory{
  id:string,
  name:string,
  img:string
}