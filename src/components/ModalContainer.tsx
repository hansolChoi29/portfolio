"use clinet";
import { RefObject, ReactNode } from "react";
import { motion, AnimatePresence, MotionProps } from "framer-motion";
import ButtonUp from "@/components/ButtonUp";

export interface ModalContainerProps {
  onClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
  scrollAnimationProps: MotionProps;
  title: string;
  children: ReactNode;
}

export default function ModalContainer({
  onClose,
  modalRef,
  title,
  children,
}: ModalContainerProps) {
  return (
    <AnimatePresence>
      <motion.div
        ref={modalRef}
        className="fixed inset-0 z-[9999] bg-[#efefef] sm:p-12 p-3 overflow-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-black relative flex items-center justify-center py-8">
          <h2 className="sm:text-3xl font-bold my-24">{title}</h2>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-lg font-bold sm:text-xl"
          >
            ✕
          </button>
        </div>
        {children}
        <ButtonUp modalRef={modalRef} />
      </motion.div>
    </AnimatePresence>
  );
}
