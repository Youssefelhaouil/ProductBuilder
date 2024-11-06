import { descriptionSlicer } from "../Utils/function";
import Button from "./Button";
import CardImage from "./CardImage";
import { IProduct } from "../Interfaces";
import CircleColor from "./Color";

interface IProps {
  product: IProduct;
  idx: number;
  setProductEdit: (product: IProduct) => void;
  openEdit: () => void;
  setProductEditIdx: (value: number) => void;
  openDelete: () => void;
}

export default function ProductCard({
  product,
  setProductEdit,
  openEdit,
  setProductEditIdx,
  idx,
  openDelete,
}: IProps) {
  const { img, title, description, price, color, category } = product;

  const RenderCircleColor = color.map((color) => (
    <CircleColor key={color} bgColor={color} />
  ));
  const onEdit = () => {
    setProductEdit(product);
    setProductEditIdx(idx);
    openEdit();
  };
  const onRemove = () => {
    setProductEdit(product);
    openDelete();
  };

  return (
    <div className=" grid grid-rows-1 h-[500px] border-2 rounded-md p-3 space-y-1">
      <div className="flex flex-col">
        <CardImage
          url={img}
          alt={title}
          classname="h-[60%] w-full rounded-xl"
        />
        <h1 className="h-[10%] font-semibold text-xl text-gray-800 pl-1 pt-1  ">
          {descriptionSlicer(title, 25)}
        </h1>
        <p className="h-[30%] text-sm font-semibold text-gray-500 mt-1  ">
          {descriptionSlicer(description, 101)}
        </p>
      </div>
      <div>
        <div className=" flex gap-1">{RenderCircleColor}</div>
        <div className=" flex justify-between items-center mt-auto">
          <h4 className="text-xl font-bold text-indigo-500">
            ${parseFloat(price).toLocaleString("en-US")}
          </h4>

          <div className="flex items-center space-x-[2px]">
            <h1 className="text-xs font-medium">{category.name}</h1>
            <CardImage
              url={category.img}
              alt={category.name}
              classname="h-10 w-10 object-cover rounded-full"
            />
          </div>
        </div>
        <div className=" flex justify-center items-end space-x-1 ">
          <Button
            classname="bg-indigo-500 hover:bg-indigo-400 w-full"
            onClick={onEdit}
          >
            Edit
          </Button>
          <Button
            classname="bg-red-500 hover:bg-red-400 w-full"
            onClick={onRemove}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
