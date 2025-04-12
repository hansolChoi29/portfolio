import Image from "next/image";

type Props = {
  onClick: () => void;
};

export default function DogoCard({ onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="w-[660px] h-[320px]  cursor-pointer border rounded-xl shadow-lg hover: transition relative overflow-hidden group"
    >
      <div className="transition-opacity duration-300 group-hover:opacity-0">
        <Image
          src="/images/cards/dogoproject.png"
          alt="dogoproject"
          width={800}
          height={500}
          layout="responsive"
          className="rounded-2xl"
        />
        <div className="p-4">
          <h3 className="text-3xl text-white font-semibold mb-2">
            DoGo_project
          </h3>
        </div>
      </div>

      <div className=" absolute inset-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#f6f6f6] z-10">
        <div className="flex flex-col justify-center h-full">
          <div className=" flex flex-col mb-2">
            <p>개발기간 : 6주</p>
            <p>개발인원 : 개발자 4, 디자이너 1</p>
          </div>
          <div className="flex flex-col  items-center ">
            <p className="text-xl text-gray-700">
              두고 프로젝트는 호텔 예약 관리 플랫폼으로, 사용자들이 편리하게
              호텔 예약을 진행하고 관리할 수 있는 웹 애플리케이션입니다. 이
              프로젝트는 반응형 웹 디자인을 적용하여 다양한 디바이스에서
              원활하게 사용할 수 있도록 개발되었습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
