"use client";

import Image from "next/image";

type Props = {
  onClick: () => void;
};

export default function DuodincoCard({ onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="w-full max-w-[660px] aspect-[2.0625] cursor-pointer border rounded-xl shadow-lg transition relative overflow-hidden group"
    >
      <div className="transition-opacity duration-300 group-hover:opacity-0">
        <Image
          src="/images/cards/duodincoproject.png"
          alt="duodincoproject"
          width={800}
          height={500}
          style={{ height: "auto" }}
          layout="responsive"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute inset-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#f6f6f6] z-10">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col text-black mb-1 sm:text-base text-sm">
            <p>개발기간 : 1주</p>
            <p>개발인원 : 개발자 5</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs sm:text-base text-gray-700">
              듀오딩코 프로젝트는 사용자가 다양한 단어를 학습하고, 이를
              북마크하여 학습 상태를 관리할 수 있는 플랫폼입니다. 사용자는
              로그인하여 게시글을 확인하고, 단어 카드 학습을 진행하며, 필요한
              게시글은 북마크하여 나중에 다시 볼 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
