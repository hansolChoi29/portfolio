"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ToolsModal({ isOpen, onClose }: ToolsModalProps) {
  const [activeTab, setActiveTab] = useState<"front" | "back">("front");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-4 rounded-md shadow-lg relative max-w-md w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center pb-2 mb-4">
              <h1 className="text-xl font-bold">Languages and Tools</h1>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="flex border-b mb-4">
              <button
                onClick={() => setActiveTab("front")}
                className={`flex-1 py-2 text-center ${
                  activeTab === "front"
                    ? "border-b-2 border-[#636363] text-[#636363] font-bold"
                    : "text-gray-600"
                }`}
              >
                Front-End
              </button>
              <button
                onClick={() => setActiveTab("back")}
                className={`flex-1 py-2 text-center ${
                  activeTab === "back"
                    ? "border-b-2 border-[#636363] text-[#636363] font-bold"
                    : "text-gray-600"
                }`}
              >
                Back-End
              </button>
            </div>
            <div className="p-2">
              {activeTab === "front" && (
                <div className="list-disc list-inside text-sm text-gray-700">
                  <p>React & Next.js</p>
                  <p>Tailwind CSS</p>
                  <p>shadcn/ui</p>
                </div>
              )}
              {activeTab === "back" && (
                <div className="list-disc list-inside text-sm text-gray-700">
                  <p>React Query로 API 요청 처리</p>
                  <p>REST API</p>
                  <p>서버리스 함수(Serverless functions)</p>
                  <p>인증(Authentication) 및 상태 관리(zustand 활용)</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
