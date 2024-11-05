import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

interface IProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  closeModal: () => void;
}

export default function Modal({ isOpen, title, children, closeModal }: IProps) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeModal}
      >
        <div className="fixed inset-0 z-10 w-screen bg-black bg-opacity-15 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 backdrop-blur-sm ">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h2"
                className="text-xl font-medium text-black "
              >
                <div className="flex justify-between items-center">
                  {title}
                  <IoClose onClick={closeModal}  className="text-2xl hover:text-slate-600 cursor-pointer"/>
                </div>
              </DialogTitle>

              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
