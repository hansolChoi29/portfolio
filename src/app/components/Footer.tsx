"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <h1>@hansol_Choi</h1>

      <div>
        <p>전화번호 : </p>
        <p>010-2915-2931</p>
      </div>

      <div>
        <p>E-mail : </p>
        <p>ggksthf29@gmail.com</p>
      </div>

      <div>
        <p>Instagram : </p>
        <Link
          href="https://instagram.com/_hxnxol_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 "
        >
          {/* underline */}
          @_hxnxol_
        </Link>
      </div>
    </footer>
  );
}
