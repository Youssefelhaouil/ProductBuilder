import { descriptionSlicer } from "../Utils/function";
import Button from "./Button";
import CardImage from "./CardImage";
import { IProduct } from "../Interfaces";
import CircleColor from "./Color";

interface IProps {
  product:IProduct
}

export default function ProductCard({ product }: IProps) {
  const { img, title, description, price, color,category } = product;

  const RenderCircleColor = color.map((color) => (
    <CircleColor key={color} bgColor={color} />
  ));

  return (
    <div className="flex flex-col h-[500px] border-2 rounded-md p-3 space-y-2">
      <CardImage
        url={img}
        alt={title}
        classname="h-[45%] w-full rounded-xl"
      />
      <h1 className="font-semibold text-xl text-gray-800  pt-1 pl-1  ">
      {descriptionSlicer(title, 25)}
      </h1>
      <p className="text-sm font-semibold text-gray-500 mt-1  ">
        {descriptionSlicer(description, 101)}
      </p>
      <div className="flex gap-1">
        {RenderCircleColor}
      </div>
      <div className="flex justify-between items-center mt-auto">
        <h4 className="text-xl font-bold text-indigo-500">
          {parseFloat(price).toFixed(2)}
        </h4>
        <CardImage
          url={category.img}
          alt={category.name}
          classname="h-10 w-10 object-cover rounded-full"
        />
      </div>
      <div className="flex space-x-1 pt-1">
        <Button classname="bg-indigo-500 hover:bg-indigo-400 w-full">
          Edit
        </Button>
        <Button classname="bg-red-500 hover:bg-red-400 w-full">
          Delete
        </Button>
      </div>
    </div>
  );
}
