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
        <h3 className="text-xl font-semibold mb-2">두고 프로젝트</h3>
        <p className="text-sm text-gray-500">호텔 예약 플랫폼</p>
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
