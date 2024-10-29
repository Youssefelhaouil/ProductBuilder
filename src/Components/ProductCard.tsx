import { descriptionSlicer } from "../Utils/function";
import Button from "./Button";
import CardImage from "./CardImage";
import { IProduct } from "../Interfaces";

interface IProps {
  product:IProduct
}

function ProductCard({product}: IProps) {
  const {img,title,description}=product

  return (
    <>
      <div className="w-full flex flex-col gap-2 h-[500px] border-2 rounded-md p-3">
        <CardImage
          url={img}
          alt={title}
          classname="h-[45%] w-full rounded-xl "
        />
        <h1 className="font-semibold h-[5%] text-xl pt-1 pl-1 text-gray-800 ">
          {title}
        </h1>
        <p className="text-sm font-semibold  text-gray-500 mt-1">
          {descriptionSlicer(description, 101)}
        </p>
        <div className="flex gap-1">
          <span className="h-5 w-5 rounded-full bg-indigo-500 " />
          <span className="h-5 w-5 rounded-full bg-yellow-500" />
          <span className="h-5 w-5 rounded-full bg-red-500" />
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-bold text-indigo-500">500.00$</h4>
          <CardImage
            url="./Product11.webp"
            alt={"product name"}
            classname="h-10 w-10 object-cover rounded-full "
          />
        </div>
        <div className="flex space-x-1 pt-1">
          <Button
            classname=" bg-indigo-500 hover:bg-indigo-400  "
            width="w-full"
          >
            Edit
          </Button>
          <Button classname=" bg-red-500 hover:bg-red-400 " width="w-full">
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
