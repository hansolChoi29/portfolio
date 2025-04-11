"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className=" w-full py-10 px-6 text-left ">
      <div className="flex items-end  border-t p-4 flex-col space-y-3 text-lg text-gray-800">
        <div className="flex gap-2">
          <p className="text-gray-600">전화번호 </p>
          <p>010-2915-2931</p>
        </div>

        <div className="flex gap-2">
          <p className="text-gray-600">E-mail </p>
          <p>ggksthf29@gmail.com</p>
        </div>

        <div className="flex ">
          <Link
            className="mr-3"
            href="https://github.com/hansolChoi29"
            target="_blank"
          >
            <img
              className="w-10"
              src="   https://cdn-icons-png.flaticon.com/512/11376/11376339.png  "
            />
          </Link>
          <Link
            href="https://instagram.com/_hxnxol_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 mr-3"
          >
            <img
              className="w-10"
              src="https://cdn-icons-png.flaticon.com/128/733/733558.png"
            />
            {/* underline */}
          </Link>

          <Link href="https://winwin0219.tistory.com/">
            <img
              className="w-10"
              src="   https://cdn-icons-png.flaticon.com/512/16524/16524532.png "
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
