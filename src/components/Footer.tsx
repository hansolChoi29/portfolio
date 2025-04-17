"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t w-full bg-[#202020] py-10 px-6 text-left">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* 아이콘 출처 문구 */}
        <div className="text-xs text-white mb-4 md:mb-0">
          Icons by{" "}
          <Link
            href="https://www.flaticon.com/free-icons/cdn"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            © Flaticon
          </Link>
          <p>© 2025 Hansol Choi</p>
        </div>
        {/* 전화번호, 이메일, 소셜 아이콘 */}
        <div className="flex flex-col items-end  text-sm text-gray-800">
          <div className="flex gap-2">
            <p className="text-white">전화번호</p>
            <p className="text-white">010-2915-2931</p>
          </div>

          <div className="flex gap-2 mb-2">
            <p className="text-white">E-mail</p>
            <p className="text-white">ggksthf29@gmail.com</p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/hansolChoi29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10"
                src="https://cdn-icons-png.flaticon.com/512/11376/11376339.png"
                alt="GitHub"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="https://instagram.com/_hxnxol_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10"
                src="https://cdn-icons-png.flaticon.com/128/733/733558.png"
                alt="Instagram"
                width={30}
                height={30}
              />
            </Link>

            <Link
              href="https://winwin0219.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10"
                src="https://cdn-icons-png.flaticon.com/512/16524/16524532.png"
                alt="Tistory"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
