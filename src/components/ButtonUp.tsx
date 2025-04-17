import { RefObject } from "react";

interface ModalContentProps {
  modalRef: RefObject<HTMLDivElement>;
}

export default function ButtonUp({ modalRef }: ModalContentProps) {
  return (
    <>
      <button
        onClick={() => {
          if (modalRef.current) {
            modalRef.current.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="fixed sm:bottom-[50px] bottom-[50px] sm:right-[130px] right-[30px] z-[10000]  text-white sm:text-sm text-sm px-4 py-2  hover:animate-bounce transition"
      >
        <img src="/icons/arrow.svg" width={48} height={48} />
      </button>
    </>
  );
}
