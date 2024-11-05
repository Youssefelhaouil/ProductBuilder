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
import toast, { Toaster } from "react-hot-toast";
// import { ProductName } from "./Types";

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
  const [productList, setProductList] = useState<IProduct[]>(Products);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [productEdit, setProductEdit] = useState<IProduct>(defaultProduct);
  const [productEditIdx, setProductEditIdx] = useState<number>(0);
  const [selected, setSelected] = useState<ICategory>(Category[3]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [deleteModal,setDeleteModal]=useState(false)
  const [error, setError] = useState({
    title: "",
    description: "",
    img: "",
    price: "",
  });
  // concat Color
  const NewColor = [...new Set(tempColor.concat(productEdit.color))];

  const open = () => setIsOpen(true);
  const closeModal = () => {
    setProduct(defaultProduct);
    setIsOpen(false);
    setTempColor([]);
    setError({
      title: "",
      description: "",
      img: "",
      price: "",
    });
    setSelected(Category[3])

  };
  const openEdit = () => setIsOpenEdit(true);
  const closeModalEdit = () => {
    setProductEdit(defaultProduct);
    setIsOpenEdit(false);
    setTempColor([]);
    setError({
      title: "",
      description: "",
      img: "",
      price: "",
    });
    setSelected(Category[3])
  };
  const openDelete = () => setDeleteModal(true);
  const closeDelete = () => {
    setDeleteModal(false)
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

  const onchangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProductEdit({
      ...productEdit,
      [name]: value,
    });
    setError({
      ...error,
      [name]: "",
    });
  };



  // Handle submit Form
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
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
    toast.success(" product has been added ")

  };

  // handle edit product
  const handleEdit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = formValidation({
      title: productEdit.title,
      img: productEdit.img,
      description: productEdit.description,
      price: productEdit.price,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setError(errors);
      return;
    }
    const updatedProducts = [...productList];
    updatedProducts[productEditIdx] = { ...productEdit, color: NewColor };
    setProductList(updatedProducts);

    setProductEdit(defaultProduct);
    setTempColor([]);
    setIsOpenEdit(false);
    toast.success("product has been edited ")

  };

  // handle Remove 

  const removeProduct=()=>{
    const filtred=productList.filter(product=>product.id !== productEdit.id)
    setProductList(filtred)
    setDeleteModal(false)
    toast.success("product has been deleted ")

  }
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
  //Render edit Form Input
  const RenderEditFormInput = FormIputData.map((input) => (
    <div key={input.id} className="flex flex-col ">
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        value={productEdit[input.name]}
        onChange={onchangeEditHandler}
      />
      <ErrorMessage msg={error[input.name]} />
    </div>
  ));

  // Product Card
  const RenderProductCard = productList.map((product, index) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductEdit={setProductEdit}
      openEdit={openEdit}
      setProductEditIdx={setProductEditIdx}
      idx={index}
      openDelete={openDelete}
    />
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

  // // RENDER PRODUCT EDIT WITH ERROR MESSAGE
  // const renderEditProduct = (id:string,label:string,name:ProductName,) => {
  //   return (
  //     <div  className="flex flex-col ">
  //     <label htmlFor={id}>{label}</label>
  //     <Input
  //       type={"text"}
  //       name={name}
  //       id={id}
  //       value={productEdit[name]}
  //       onChange={onchangeEditHandler}
  //     />
  //     <ErrorMessage msg={error[name]} />
  //   </div>
  //   )
  // };

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
        <Modal
          isOpen={isOpenEdit}
          title="Edit Product"
          closeModal={closeModalEdit}
        >
          <form className="flex flex-col space-y-5" onSubmit={handleEdit}>
            <div className="flex flex-col space-y-2 ">
              {RenderEditFormInput}
              <Select
                selected={productEdit.category}
                setSelected={(value)=>setProductEdit({...productEdit,category:value})}
                Category={Category}
              />
            </div>
            <div className="flex space-x-2 flex-wrap ">{RenderCircleColor}</div>
            <div className="flex flex-wrap space-x-2">
              {NewColor.map((color) => (
                <span
                  key={color}
                  className="w-fit p-1 text-white rounded-md mb-1"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>
            <Button
              width="w-full"
              classname="bg-indigo-500 hover:bg-indigo-700  "
              onClick={openEdit}
            >
              Edit Product
            </Button>
          </form>
        </Modal>
        <Modal
          isOpen={deleteModal}
          title="Are You Sure You want to Delete this product ?"
          closeModal={closeDelete}
        >
          
            <Button
              width="w-full"
              classname="bg-red-700 hover:bg-red-500  "
              onClick={removeProduct}
            >
              Delete Product
            </Button>
        </Modal>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {RenderProductCard}
        </div>
      </div>
      <Toaster position="top-center"/>
    </>
  );
}

export default App;
