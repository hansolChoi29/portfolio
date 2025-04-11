type Props = {
  onClick: () => void;
};

export default function DogoCard({ onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="w-96 h-96 cursor-pointer border rounded-xl shadow-md p-6 hover:shadow-lg transition relative overflow-hidden group"
    >
      <div className="transition-opacity duration-300 group-hover:opacity-0">
        <img src="/dogo.png" alt="두고 프로젝트" />
        <h3 className="text-xl font-semibold mb-2">dogo project</h3>
        <p className="text-sm text-gray-500">
          두고 프로젝트는 호텔 예약 관리 플랫폼으로, 사용자들이 편리하게 호텔
          예약을 진행하고 관리할 수 있는 웹 애플리케이션입니다. 이 프로젝트는
          반응형 웹 디자인을 적용하여 다양한 디바이스에서 원활하게 사용할 수
          있도록 개발되었습니다.
        </p>
      </div>

      <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white z-10">
        <p className="text-sm text-gray-700">
          사용자의 예약과 인증을 지원하는 호텔 플랫폼입니다. Next.js, Zustand,
          Supabase로 구축되었어요.
        </p>
      </div>
    </div>
  );
}
