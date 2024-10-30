import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./Components/ProductCard";
import { Products, FormIputData, Colors, Category } from "./Data";
import Button from "./Components/Button";
import Modal from "./Components/Modal";
import Input from "./Components/Input";
import { ICategory, IProduct } from "./Interfaces";
import { formValidation } from "./validation";
import ErrorMessage from "./Components/ErrorMessage";
import CircleColor from "./Components/Color";
import { v4 as uuidv4 } from "uuid";
import Select from "./Components/Select";

function App() {
  const defaultProduct = {
    title: "",
    description: "",
    img: "",
    price: "",
    category: {
      name: "",
      img: "",
    },
    color: [],
  };
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [productList, setProductList] = useState<IProduct[]>(Products);

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState({
    title: "",
    description: "",
    img: "",
    price: "",
  });
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [selected, setSelected] = useState<ICategory>(Category[3]);

  const open = () => setIsOpen(true);
  const closeModal = () => {
    setProduct(defaultProduct);
    setIsOpen(false);
  };

  //onchange handler
  const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setError({
      ...error,
      [name]: "",
    });
  };

  // Handle submit Form
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = formValidation({
      title: product.title,
      img: product.img,
      description: product.description,
      price: product.price,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setError(errors);
      return;
    }
    setProductList((prev) => [
      { ...product, id: uuidv4(), color: tempColor, category: selected },
      ...prev,
    ]);
    setProduct(defaultProduct);
    setTempColor([]);
    setIsOpen(false);
  };
  // Form input
  const RenderFormInput = FormIputData.map((input) => (
    <div key={input.id} className="flex flex-col ">
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={onchangeHandler}
      />
      <ErrorMessage msg={error[input.name]} />
    </div>
  ));

  // Product Card
  const RenderProductCard = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  // product Color
  const RenderCircleColor = Colors.map((color) => (
    <CircleColor
      key={color}
      bgColor={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((prev) => prev !== color));
          return;
        }
        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));

  return (
    <>
      <div className="container mx-auto ">
        <div className="flex justify-end pb-4">
          <Button
            width="w-fit"
            classname="bg-indigo-500 hover:bg-indigo-700"
            onClick={open}
          >
            Add Product
          </Button>
        </div>
        <Modal isOpen={isOpen} title="Add New Product" closeModal={closeModal}>
          <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2 ">
              {RenderFormInput}
              <Select
                selected={selected}
                setSelected={setSelected}
                Category={Category}
              />
            </div>
            <div className="flex space-x-2 flex-wrap ">{RenderCircleColor}</div>
            <div className="flex flex-wrap space-x-2">
              {tempColor.map((color) => (
                <span
                  className="w-fit p-1 text-white rounded-md"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>
            <Button
              width="w-full"
              classname="bg-indigo-500 hover:bg-indigo-700  "
              onClick={open}
            >
              Add Product
            </Button>
          </form>
        </Modal>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {RenderProductCard}
        </div>
      </div>
    </>
  );
}

export default App;
