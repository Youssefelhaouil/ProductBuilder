export interface IProduct {
  id: string | undefined,
  img:string,
  title: string,
  description:string,
  price:number,
  category:{
    name:string,
    img:string
  },
  color:string[]
}
