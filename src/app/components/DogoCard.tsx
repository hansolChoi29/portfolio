"use client";

import Image from "next/image";

type Props = {
  onClick: () => void;
};

export default function DogoCard({ onClick }: Props) {
  return (
    <div
      onClick={onClick}
      // w-full: 가로 전체, max-w-[660px]: 최대 너비 660px, aspect-[2.0625]로 높이 비율을 유지 (660/320 ≒ 2.0625)
      className="w-full max-w-[660px] aspect-[2.0625] cursor-pointer border rounded-xl shadow-lg transition relative overflow-hidden group"
    >
      <div className="transition-opacity duration-300 group-hover:opacity-0">
        <Image
          src="/images/cards/dogoproject.png"
          alt="dogoproject"
          width={800}
          height={500}
          layout="responsive"
          style={{ height: "auto" }}
          className="rounded-2xl"
        />
      </div>

      <div className="absolute inset-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#f6f6f6] z-10">
        <div className="flex flex-col justify-center h-full">
          <div className="flex text-black flex-col mb-1 sm:text-base text-sm">
            <p>개발기간 : 6주</p>
            <p>개발인원 : 개발자 4, 디자이너 1</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs sm:text-base text-gray-700">
              두고 프로젝트는 호텔 예약 관리 플랫폼으로, 사용자들이 편리하게
              호텔 예약을 진행하고 관리할 수 있는 반응형 웹 애플리케이션입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
